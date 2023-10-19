const repositorioAtendimentos = require('../repositories/atendimentos.js');
const repositorio = new repositorioAtendimentos();

class servicoAtendimentos {

    VerificarAtendimento(atendimento) {
        if(!atendimento){
            throw new Error('Não foi enviado um atendimento para cadastrar.');
        } else if(!atendimento.dia){
            throw new Error('Não foi enviado o dia do atendimento');
        } else if(!atendimento.hora){
            throw new Error('Não foi enviado a hora do atendimento');
        } else if(!atendimento.valor) {
            throw new Error('Não foi enviado o valor do atendimento');
        } else if(!atendimento.statusAtendimento) {
            throw new Error('Não foi enviado o status do atendimento');
        }
        return true;
    }

    async ConsultarUm(idAtendimento) {
        if(isNaN(idAtendimento)) {
            throw new Error("Favor informar o ID apenas com número.");
        } else if(!idAtendimento) {
            throw new Error('Esse verificador não existe.');
        }
        return repositorio.ConsultarUm(idAtendimento)
    }

    async ConsultarTodos() {
        return repositorio.ConsultarTodos();
    }

    async Create(atendimento) {
        this.VerificarAtendimento(atendimento);
        return repositorio.Create(atendimento);
    }

    async Update(idAtendimento, atendimento) {
        if(!idAtendimento) {
            throw new Error('Não foi enviado o identificador do atendimento para alterar.');
        }
        this.VerificarAtendimento(atendimento);
        return repositorio.Update(idAtendimento, atendimento);
    }

    async Delete(idAtendimento) {
        return repositorio.Delete(idAtendimento);
    }
}

module.exports = servicoAtendimentos





    
       





