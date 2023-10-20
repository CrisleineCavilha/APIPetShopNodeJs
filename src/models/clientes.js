const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Usuario = require('./usuarios.js');

const Cliente = conexao.define('clientes', {
    idCliente: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    idUsuario: {
        type: DataTypes.INTEGER,
    },    
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    
}, {
    createdAt: false,
    updatedAt: false
});

/* belongs.to serve para declarar a qual modelo(models) o cliente pertence.
No primeiro parâmetro é informado o modelo a qual pertence, nesse caso o cliente pertence ao ao usuario.
No segundo parâmetro é um objeto com as características desse relacionamento.
constraint para garantir a relação e criar a chave estrangeira.*/

// 1 usuário para 1 cliente
Cliente.belongsTo(Usuario, { 
    constraint: true, 
    foreignKey: 'idUsuario' //nome da chave estrangeira
})

module.exports = Cliente