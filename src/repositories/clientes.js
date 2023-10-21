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

    async Create(cliente, usuario, idUsuario, transaction) {
        const resultUsuario = await Usuario.create(usuario, {transaction});
        const resultCliente = await Cliente.create(cliente, {
            where: {idUsuario}}, 
            {transaction}       )

             
        return {...resultCliente, ...resultUsuario};
    }
 
    async Update(idCliente, cliente) {
        const result = await Cliente.update(cliente, {
            where: {idCliente}
        })
        return result;
    }

    // async Update(idUsuario, usuario, transaction) {
    //     const result = await Usuario.update(usuario, {
    //         where: {idUsuario}},
    //                {transaction}
    //     )
    // }

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






