const Cliente = require('../models/petshop.js');

class repositorioPetShop {
    
    async ConsultarUm(id) {
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
        console.log(result);
        return result;
    }

    async Delete(id) {
        return Cliente.destroy({
            where: { id }
        });
    }
}

module.exports = repositorioPetShop






