const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Cachorro = require('./cachorros.js');

const Atendimento = conexao.define('atendimentos', {
    idAtendimento: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id: {
        type: DataTypes.INTEGER,
    },
    dia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    valor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    statusAtendimento: {
        type: DataTypes.STRING,
        allowNull: false,
    }   
}, {
    createdAt: false,
    updatedAt: false
});

/* belongs.to serve para declarar a qual modelo(models) o atendimento pertence.
No primeiro parâmetro é informado o modelo a qual pertence, nesse caso é o cachorro.
No segundo parâmetro é um objeto com as características desse relacionamento.
constraint para garantir a relação e criar a chave estrangeira.*/

// 1 Cachorro para 1 cliente
Atendimento.belongsTo(Cachorro, { 
    constraint: true, 
    foreignKey: 'id' //nome da chave estrangeira
})

// // /* Relacionamento 1 para N usa hasMany(possui muitos), no caso atendimentos.*/
// 1 cliente para vários cachorros.
Cachorro.hasMany(Atendimento, {
    foreignKey: 'id'
})

module.exports = Atendimento