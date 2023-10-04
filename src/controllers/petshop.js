const servicoPetShop = require('../services/petshop');
const servico = new servicoPetShop();

class controllerPetShop {

    async ConsultarUm(req, res) {
        try {
            console.log(req.params.id);
            const result = await servico.ConsultarUm(req.params.id);
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
                message: "Erro ao listar clientes."
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
                message: "Erro ao cadastrar cliente."
            })
        }
    }

    async Update(req, res) {
        try {
            const result = await servico.Update(req.params.id, req.body.cliente);
            res.status(200).json({
                cliente: result
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao alterar cadastro de cliente."
            })
        }
    }

    async Delete(req, res) {
        try {
            await servico.Delete(req.params.id);
            res.status(204)
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao deletar cadastro de cliente."
            })
        }
    }
} 

module.exports = controllerPetShop