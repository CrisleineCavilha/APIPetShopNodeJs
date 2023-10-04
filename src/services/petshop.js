const repositorioPetShop = require('../repositories/petshop.js');
const repositorio = new repositorioPetShop();

class servicoPetShop {

    VerificarCliente(cliente) {
        if(!cliente){
            throw new Error('Não foi enviado um cliente para cadastrar.');
        } else if(!cliente.nome){
            throw new Error('Não foi enviado o nome do cliente');
        } else if(!cliente.telefone){
            throw new Error('Não foi enviado o número de telefone do cliente');
        } 
        return true;
    }

    async ConsultarUm(id) {
        if(isNaN(id)) {
            return {message: "Favor informar o ID apenas com número."};
        }
        const resultadoId = repositorio.ConsultarUm(id)
        console.log(resultadoId)
        if(resultadoId == null ) {
            return {message: "Esse ID não foi encontrado"};
        } else {
            return resultadoId;
        }
    }

    async ConsultarTodos() {
        return repositorio.ConsultarTodos();
    }

    async Create(cliente) {
        this.VerificarCliente(cliente);
        return repositorio.Create(cliente);
    }

    async Update(id, cliente) {
        if(!id) {
            throw new Error('Não foi enviado o identificador do cliente para alterar.');
        }
        this.VerificarCliente(cliente);
        return repositorio.Update(id, cliente);
    }

    async Delete(id) {
        return repositorio.Delete(id);
    }
}

module.exports = servicoPetShop





    
       





