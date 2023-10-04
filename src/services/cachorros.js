const repositorioCachorros = require('../repositories/cachorros.js');
const repositorio = new repositorioCachorros();


class servicoCachorros {

    VerificarCachorro(cachorro) {
        if(!cachorro){
            throw new Error('Não foi enviado um cachorro para cadastrar.');
        } else if(!cachorro.nome){
            throw new Error('Não foi enviado o nome do cachorro.');
        } else if(!cachorro.raca){
            throw new Error('Não foi enviado a raça do cachorro.');
        } 
        return true;
    }

    async ConsultarUm(id) {
        if(isNaN(id)) {
            throw new Error("Favor informar o ID apenas com número.");
        } 
        const resultadoId = repositorio.ConsultarUm(id)
        console.log(resultadoId)
        if(resultadoId == null) {
            throw new Error("Esse ID não foi encontrado");
        } else {
            return resultadoId;
        }
    }

    async ConsultarTodos() {
        return repositorio.ConsultarTodos();
    }

    async Create(cachorro) {
        this.VerificarCachorro(cachorro);
        return repositorio.Create(cachorro);
    }

    async Update(id, cachorro) {
        if(!id) {
            throw new Error('Não foi enviado o identificador do cachorro para alterar.');
        }
        this.VerificarCachorro(cachorro);
        return repositorio.Update(id, cachorro);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }
}

module.exports = servicoCachorros