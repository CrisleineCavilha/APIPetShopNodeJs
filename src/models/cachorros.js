const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Cliente = require('./clientes.js');

const Cachorro = conexao.define('cachorros', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idCliente: {
        type: DataTypes.INTEGER,
    },
    raca: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    createdAt: false,
    updatedAt: false
});

/* belongs.to serve para declarar a qual modelo(models) o cachorro pertence.
No primeiro parâmetro é informado o modelo a qual pertence, nesse caso é o cliente.
No segundo parâmetro é um objeto com as características desse relacionamento.
constraint para garantir a relação e criar a chave estrangeira.*/

// 1 Cachorro para 1 cliente
Cachorro.belongsTo(Cliente, { 
    constraint: true, 
    foreignKey: 'idCliente' //nome da chave estrangeira
})

// // /* Relacionamento 1 para N usa hasMany(possui muitos), no caso cachorro.*/
// 1 cliente para vários cachorros.
Cliente.hasMany(Cachorro, {
    foreignKey: 'idCliente'
})

module.exports = Cachorro