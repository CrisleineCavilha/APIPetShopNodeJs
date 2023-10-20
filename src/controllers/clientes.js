const servicoClientes = require('../services/clientes.js');
const servico = new servicoClientes();

class controllerClientes {

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
            const result = await servico.Create(req.body.cliente);
            res.status(201).json({
                cliente: result
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
            const result = await servico.Update(req.params.idCliente, req.body.cliente);
            res.status(200).json({
                message: "Cadastro alterado com Sucesso."
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
            await servico.Delete(req.params.idCliente);
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