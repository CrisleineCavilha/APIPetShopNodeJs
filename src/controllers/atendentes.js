const servicoAtendentes = require('../services/atendentes.js');
const servico = new servicoAtendentes();

class controllerAtendentes {

    async Create(req, res) {
        try {
            req.session.permissao
            const result = await servico.Create(req.body.atendente);
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

    async Update(req, res) {
        try {
            const result = await servico.Update(req.params.idUsuario, req.body.atendente);
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

    async Delete(req, res) {
        try {
            servico.Delete(req.params.idUsuario);
            res.status(200).json({
                message: "Usuário (Atendente) excluído com Sucesso."
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao deletar cadastro de usuário."
            })
        }
    }
} 

module.exports = controllerAtendentes