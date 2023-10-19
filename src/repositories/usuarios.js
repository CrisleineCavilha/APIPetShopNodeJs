const Usuario = require('../models/usuarios.js')
const bcrypt = require('bcrypt')

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

    async Create(usuario, transaction) {
        const hashSenha = await bcrypt.hash(usuario.senha, 10)

        const result = await Usuario.create(
            { ...usuario, senha: hashSenha },
        // ...usuario significa explodir o que tem dentro do objeto usuario. Depois utiliza-se senha: hashSenha para criar apenas a senha.
            { transaction }
        )
        return result
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

    async Delete(idUsuario) {
        return Usuario.destroy({
            where: { idUsuario }
        });
    }

}

module.exports = RepositorieUsuarios