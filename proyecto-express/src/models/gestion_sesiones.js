const { Sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");


const GestionSesiones = Sequelize.define(
    "gestion_sesiones",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        real_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true, 
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        // schema: "proyecto_express", 
        tableName: "gestion_sesiones", 
        timestamps: false, 
    }
);

module.exports = GestionSesiones;
