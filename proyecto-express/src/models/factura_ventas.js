const { Sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");
const Usuario = require("./usuario"); 


const FacturaVentas = Sequelize.define(
    "factura_ventas",
    {
        id_bill: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_customer: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario, 
                key: "id_usuario",
            },
            allowNull: false,
        },
        issue_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        // schema: "proyecto_express", 
        tableName: "factura_ventas", 
        timestamps: false, 
    }
);

module.exports = FacturaVentas;
