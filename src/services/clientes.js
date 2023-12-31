const repositorioClientes = require('../repositories/clientes.js');
const repositorio = new repositorioClientes();

class servicoClientes {

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


    async ConsultarUmPorEmail(email) {
        return repositorio.ConsultarUmPorEmail(email);
    }
 

    async ConsultarUm(idCliente, transaction) {
        if(isNaN(idCliente)) {
            throw new Error("Favor informar o ID apenas com número.");
        } else if (!idCliente) {
            throw new Error('Não foi enviado o identificador do cliente para consultar.');
        }
        return repositorio.ConsultarUm(idCliente, transaction);
    }


    async ConsultarTodos() {
        return repositorio.ConsultarTodos();
    }


    async Create(cliente) {
        return repositorio.Create(cliente);
    }


    async Update(idCliente, cliente) {
        if(!idCliente) {
            throw new Error('Não foi enviado o identificador do cliente para alterar.');
        }
        this.VerificarCliente(cliente);
        return repositorio.Update(idCliente, cliente);
    }



    async Delete(idCliente) {
        return repositorio.Delete(idCliente);
    }
}



module.exports = servicoClientes




