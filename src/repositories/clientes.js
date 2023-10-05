const Cliente = require('../models/clientes.js');
const Cachorro = require('../models/cachorros.js');

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


    async Create(cliente) {
        console.log(cliente)
        const result = await Cliente.create(cliente);
        console.log(result);
        return result;
    }
 
    async Update(idCliente, cliente) {
        const result = await Cliente.update(cliente, {
            where: {idCliente}
        })
        return result;
    }

    async Delete(idCliente) {
        return Cliente.destroy({
            where: { idCliente }
        });
    }

    
}

module.exports = repositorioClientes






