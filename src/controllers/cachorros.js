const servicoCachorros = require('../services/cachorros.js');
const servico = new servicoCachorros();

class controllerCachorros {

    async ConsultarUm(req, res) {
        try {
            console.log(req.params.id);
            const result = await servico.ConsultarUm(req.params.id);
            res.status(200).json({
                cachorro: result     
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
                cachorros: result
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao listar cachorros."
            })
        }
    }

    async Create(req, res) {
        try {
            const result = await servico.Create(req.body.cachorro);
            res.status(201).json({
                cachorro: result
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
            const result = await servico.Update(req.params.id, req.body.cachorro);
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
            await servico.Delete(req.params.id);
            res.status(200).json({
                message: "Cadastro excluído com Sucesso."
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao deletar cadastro de cachorro."
            })
        }
    }

} 

module.exports = controllerCachorros