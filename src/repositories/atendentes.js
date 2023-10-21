const Usuario = require('../models/usuarios.js')
const bcrypt = require('bcrypt')

class RepositorieAtendentes {

    async ConsultarUmPorEmail(email) {
        return Usuario.findOne({
            where: { email }
        });
    }

    async Create(usuario){
        const hashsenha = await bcrypt.hash(usuario.senha, 10)

        return Usuario.create({ ...usuario, senha: hashsenha})
    }
    
    async Update(usuario){
        const hashsenha = await bcrypt.hash(usuario.senha, 10)

        return Usuario.update({ ...usuario, senha: hashsenha})
    }


    async Delete(idUsuario) {
        return Usuario.destroy({
            where: {idUsuario }
        });
    }
    
}

module.exports = RepositorieAtendentes