const Usuario = require('../models/usuarios.js')

class RepositorieUsuarios {

    async ConsultarUm(idUsuario, transaction) {
        return Usuario.findOne({
            where: { idUsuario },
            transaction
        });
    }

    async ConsultarUmPorEmail(email) {
        return Usuario.findOne({
            where: { email }
        });
    }
    
    async ConsultarTodos() {
        return Usuario.findAll();
    }
    
}

module.exports = RepositorieUsuarios