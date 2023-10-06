const servicoAtendimentos = require('../services/atendimentos.js');
const servico = new servicoAtendimentos();

class controllerAtendimentos {

    async ConsultarUm(req, res) {
        try {
            console.log(req.params.idAtendimento);
            const result = await servico.ConsultarUm(req.params.idAtendimento);
            res.status(200).json({
                Atendimento: result     
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
                atendimentos: result
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
            const result = await servico.Create(req.body.atendimento);
            res.status(201).json({
                atendimento: result
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
            const result = await servico.Update(req.params.idAtendimento, req.body.atendimento);
            res.status(200).json({
                message: "Atendimento alterado com Sucesso."
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
            await servico.Delete(req.params.idAtendimento);
            res.status(200).json({
                message: "Atendimento excluído com Sucesso."
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao deletar atendimento do cachorro."
            })
        }
    }
} 

module.exports = controllerAtendimentos