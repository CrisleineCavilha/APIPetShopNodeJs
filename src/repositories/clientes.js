const Cliente = require('../models/clientes.js');
const Cachorro = require('../models/cachorros.js');
const Usuario = require('../models/usuarios.js');
const bcrypt = require('bcrypt')

class repositorioClientes {
    

    async ConsultarUmPorEmail(email) {
        return Usuario.findOne({
            where: { email }
        });
    }


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
            { usuarioId: resultUsuario.idUsuario, nome: cliente.nome, telefone: cliente.telefone },
            {transaction}
        )             
        return {...resultCliente, ...resultUsuario };
    }

   
    async Update(idCliente, cliente) {
        await Cliente.update(cliente, {
            where: {
                idCliente
            }
        })
        return Cliente.findOne({
            where: { idCliente }
        })
    }

    
    async Delete(idCliente) {
        return Cliente.destroy({
            where: { idCliente }
        });       
    }   
        
}

module.exports = repositorioClientes

