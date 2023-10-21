const servicoClientes = require('../services/clientes.js');
const servico = new servicoClientes();
const bcrypt = require('bcrypt') // importado para comparar a senha informada com a hasheada no banco.
const jwt = require('jsonwebtoken'); // impotado para autenticar o login do usuário.
const config = require("../config");


class controllerClientes {


    async Login(req, res) {
        
        // Como login e senha é passado pelo usuário através do post, usa-se req.body.
        const { email, senha } = req.body;

        //Verificação se foi informado email e senha.
        if(!email || !senha ){
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }
        console.log(email)
        //dataValues: usuario é usado para ter acesso a todas as informações do objeto usuario.
        const { dataValues: usuario } = await servico.ConsultarUmPorEmail(email)

        if(!usuario) {
            console.log('erro1')
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }

        // bcrypt.compare é p/ comparar a senha informada com a senha hasheada no banco de dados.
        if(!(await bcrypt.compare(senha, usuario.senha))){ //senha é a informada pelo usuário. pessoa.senha é a hasheada no banco.
            console.log('erro2')
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }
        console.log(usuario)   

        const token = jwt.sign( // o jwt serve para autenticar o login do usuário.
            { idUsuario: usuario.idUsuario, email: usuario.email, permissao: usuario.permissao},
            config.secret // o secret é a chave que encontra-se la em config.js
        )

        res.json({ token })             
    }


    async ConsultarUm(req, res) {
        try {
            console.log(req.session.permissao)
            const result = await servico.ConsultarUm(req.params.idCliente);
            res.status(200).json({
                cliente: result     
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }


    async ConsultarTodos(req, res) {
        try {
            console.log(req.session.permissao)
            const result = await servico.ConsultarTodos();
            res.status(200).json({
                clientes: result
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Create(req, res) {
        try {
            console.log(req.session.permissao)
            const resultCliente = await servico.Create(req.body.cliente);
            res.status(201).json({
                message: { resultCliente }
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Update(req, res) {
        try {
            const resultCliente = await servico.Update(req.params.idCliente, req.body.cliente);
            res.status(200).json({
                message: resultCliente
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Delete(req, res) {
        try {
            servico.Delete(req.params.idCliente);
            res.status(200).json({
                message: "Cadastro excluído com Sucesso."
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao deletar cadastro de cliente."
            })
        }
    }
} 

module.exports = controllerClientes
