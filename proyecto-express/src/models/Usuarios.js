const {Sequelize} = require("../consfig/database")
const {DataTypes} = require("sequelize")

const usuario = Sequelize.define(
    "usuario",
    {
        id_usuario:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        }
    },
    {
        name:{
            type:DataTypes.STRING(255),
            allowNull:false,
            unique:false,
            defaulValue:"valor por defecto"
        }
    },
    {
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true, 
        }
    },
    {
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },

    },
    {
        address: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaulValue:DataTypes.NOW
        }
    },
    {
     
        tableName: "usuario", 
        timestamps: false, 
    }
)
module.exports( usuario)