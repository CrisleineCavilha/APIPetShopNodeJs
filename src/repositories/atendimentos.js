const Atendimento = require('../models/atendimentos.js');
const Cachorro = require('../models/cachorros.js');


class repositorioAtendimentos {
    
    async ConsultarUm(idAtendimento) {
        return Atendimento.findOne({
            where: { idAtendimento},
            include: [Cachorro]
        });
    }

    async ConsultarTodos() {
        return Atendimento.findAll();
    }


    async Create(atendimento) {
        console.log(atendimento)
        const result = await Atendimento.create(atendimento);
        console.log(result);
        return result;
    }
 
    async Update(idAtendimento, atendimento) {
        const result = await Atendimento.update(atendimento, {
            where: {idAtendimento}
        })
        return result;
    }

    async Delete(idAtendimento) {
        return Atendimento.destroy({
            where: { idAtendimento }
        });
    }
        
}

module.exports = repositorioAtendimentos






