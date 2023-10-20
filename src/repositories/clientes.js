const Cliente = require('../models/clientes.js');
const Cachorro = require('../models/cachorros.js');
const Usuario = require('../models/usuarios.js');
const bcrypt = require('bcrypt')

class repositorioClientes {
    
    async ConsultarUm(idCliente) {
        return Cliente.findOne({
            where: { idCliente }, 
            include: [Cachorro]
        });
    }

    async ConsultarTodos() {
        return Cliente.findAll();
    }


    async Create(cliente, senha, usuario, transaction) {
       
        const result = await Cliente.create(cliente);
        const hashSenha = await bcrypt.hash(senha, 10)

        const result1 = await Usuario.create(
            { ...usuario, senha: hashSenha },
            {transaction}
        )
        return true
        
    }
 
    async Update(idCliente, cliente) {
        const result = await Cliente.update(cliente, {
            where: {idCliente}
        })
        return result;
    }

    async Delete(idCliente, idUsuario) {
        try {
            const cliente =  Cliente.destroy({
                where: { idCliente }
            })
            const usuario =  Usuario.destroy({
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






