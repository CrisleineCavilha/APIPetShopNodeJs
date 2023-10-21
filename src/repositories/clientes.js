const Cliente = require('../models/clientes.js');
const Cachorro = require('../models/cachorros.js');
const Usuario = require('../models/usuarios.js');
const bcrypt = require('bcrypt')

class repositorioClientes {
    
    async ConsultarUm(idCliente, transaction) {
        return Cliente.findOne({
            where: { idCliente }, 
            include: [Cachorro],
            include: [Usuario]
        },
        {transaction}
        );
    }

    async ConsultarTodos() {
        return Cliente.findAll({
            include: [Usuario]
        });
    }

    async Create(cliente, transaction) {
        const { dataValues: resultUsuario } = await Usuario.create({
            email: cliente.email,
            senha: await bcrypt.hash(cliente.senha, 10)
        }, {transaction});

        const { dataValues: resultCliente} = await Cliente.create(
            { usuarioId: resultUsuario.id, nome: cliente.nome, telefone: cliente.telefone },
            {transaction}
        )             
        return {...resultCliente, ...resultUsuario };
    }
 
    async Update(idCliente, cliente, transaction) {
        const { dataValues: resultUsuario } = await Usuario.update({
            email: cliente.email,
            senha: await bcrypt.hash(cliente.senha, 10)},
            {where: {idCliente}},
            {transaction});

        const { dataValues: resultCliente} = await Cliente.create(
             {usuarioId: resultUsuario.id, nome: cliente.nome, telefone: cliente.telefone},
             {where: {idCliente}},
             {transaction}
        )             
        return {...resultCliente, ...resultUsuario };
    }
    
    async Delete(idCliente, idUsuario) {
        try {
            Cliente.destroy({
                where: { idCliente }
            })
            Usuario.destroy({
                where: { idUsuario }
            })
            return true

        } catch(error) {
            console.log(error)
            return false          
        }
    

    }
        
}

module.exports = repositorioClientes

