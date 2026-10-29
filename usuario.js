const Sequelize =require('sequelize');
const database = require ('./db');

const usuario =database.define('usuario',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type:Sequelize.STRING,
        allowNull: false
    },
    Cep:{
        type:Sequelize.STRING,
        allowNull: false
    }
    
    });
module.exports= usuario;
