const Cliente = require('../models/clientes.js');
const Cachorro = require('../models/cachorros.js');

class repositorioClientes {
    
    async ConsultarUm(id) {
        this.ListarCachorros(Cliente)
        return Cliente.findOne({
            where: {id}
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
 
    async Update(id, cliente) {
        const result = await Cliente.update(cliente, {
            where: {id}
        })
        return result;
    }

    async Delete(id) {
        return Cliente.destroy({
            where: { id }
        });
    }

    async ListarCachorros() {
        const cliente = await Cliente.findByPk(1, {include: Cachorro});
        return (cliente.cachorro.nome);
        
    }
}

module.exports = repositorioClientes






