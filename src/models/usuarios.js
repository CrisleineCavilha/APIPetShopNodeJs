const {DataTypes} = require('sequelize');
const conexao = require('../database.js');
const Cliente = require('./clientes.js');

const Usuario = conexao.define('usuarios', {

    idUsuario: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    idCliente: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,        
    },
}, {
    createdAt: false,
    updatedAt: false
});


/* belongs.to serve para declarar a qual modelo(models) o usuário pertence.
No primeiro parâmetro é informado o modelo a qual pertence, nesse caso o usuário pertence ao cliente.
No segundo parâmetro é um objeto com as características desse relacionamento.
constraint para garantir a relação e criar a chave estrangeira.*/

// 1 usuário para 1 cliente
Usuario.belongsTo(Cliente, { 
    constraint: true, 
    foreignKey: 'idCliente' //nome da chave estrangeira
})

module.exports = Usuario







