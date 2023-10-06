const Cachorro = require('../models/cachorros.js');
const Atendimento = require('../models/atendimentos.js');


class repositorioCachorros{
    
    async ConsultarUm(id) {
        return Cachorro.findOne({
            where: {id},
            include: [Atendimento]
        });
    }

    async ConsultarTodos() {
        return Cachorro.findAll();
    }


    async Create(cachorro) {
        console.log(cachorro)
        const result = await Cachorro.create(cachorro);
        console.log(result);
        return result;
    }
 
    async Update(id, cachorro) {
        const result = await Cachorro.update(cachorro, {
            where: {id}
        })
        return result;
    }

    async Delete(id) {
        return Cachorro.destroy({
            where: { id }
        });
    }        
    
}

module.exports = repositorioCachorros






