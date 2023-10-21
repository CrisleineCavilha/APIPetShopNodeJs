const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Usuario = require('../models/usuarios.js');

const Cliente = conexao.define('clientes', {
    idCliente: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
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
    idUsuario: {
        field: 'idUsuario',
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'idUsuario'
        }
    },
            
}, {
    createdAt: false,
    updatedAt: false
});


Cliente.belongsTo(Usuario, { 
    constraint: true, 
    foreignKey: 'idUsuario' //nome da chave estrangeira
});

module.exports = Cliente