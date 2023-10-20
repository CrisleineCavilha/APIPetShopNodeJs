const servicoAtendentes = require('../services/atendentes.js');
const servico = new servicoAtendentes();

class controllerAtendentes {

    async ConsultarUm(req, res) {
        try {
            console.log(req.params.idUsuario);
            const result = await servico.ConsultarUm(req.params.idUsuario);
            res.status(200).json({
                atendente: result     
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
                atendentes: result
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
            const result = await servico.Create(req.body.usuario);
            res.status(201).json({
                atendente: result
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
            const result = await servico.Update(req.params.idUsuario, req.body.usuario);
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
            await servico.Delete(req.params.idUsuario);
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

module.exports = controllerAtendentes