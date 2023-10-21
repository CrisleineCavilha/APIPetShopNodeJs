const repositorioAtendentes = require('../repositories/atendentes.js');
const repositorio = new repositorioAtendentes();

class servicoAtendentes {

    async ConsultarUmPorEmail(email) {
        return repositorio.ConsultarUmPorEmail(email);
    }

    
    async Create(atendente, transaction) {
        return repositorio.Create(atendente, transaction);
    }

    async Update(idUsuario, atendente) {
        if(!idUsuario) {
            throw new Error('Não foi enviado o identificador do atendente para alterar.');
        }
        return repositorio.Update(idUsuario, atendente);
    }

    async Delete(idUsuario) {
        return repositorio.Delete(idUsuario);
    }
}

module.exports = servicoAtendentes





    
       





