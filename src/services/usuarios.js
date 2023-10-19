const RepositorieUsuarios = require("../repositories/usuarios");

const repositorio = new RepositorieUsuarios()

class servicoUsuarios {
    
    VerficarUsuario(usuario) {
        if(!usuario){
            throw new Error('Não foi enviada o usuario para adicionar');
        } else if(!usuario.email){
            throw new Error('Não foi enviado o email do usuario');
        } else if(!usuario.senha){
            throw new Error('Não foi enviado a senha do usuario');
        }
        return true
    }

    async ConsultarUm(idUsuario, transaction) {
        return repositorio.ConsultarUm(idUsuario, transaction);
    }

    async ConsultarUmPorEmail(email) {
        return repositorio.ConsultarUmPorEmail(email);
    }

    async ConsultarTodos() {
        return repositorio.ConsultarTodos();
    }

    async Create(usuario, transaction) {
        this.VerficarUsuario(usuario)

        return repositorio.Create(usuario, transaction);
    }

    async Update(idUsuario, usuario) {
        if(!idUsuario) {
            throw new Error('Não foi enviada o identificador do usuário para alterar');
        } 
        this.VerficarUsuario(usuario)

        return repositorio.Update(idUsuario, usuario);
    }

    async Delete(idUsuario) {
        return repositorio.Delete(idUsuario);
    }

} 

module.exports = servicoUsuarios