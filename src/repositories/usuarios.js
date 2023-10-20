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

    async Update(idUsuario, usuario) {
        const result = await Usuario.update(usuario, {
            where: {
                idUsuario
            }
        })
        console.log(result)
        return result
    }

    // async Delete(idUsuario) {
    //     return Usuario.destroy({
    //         where: { idUsuario }
    //     });
    // }

}

module.exports = RepositorieUsuarios