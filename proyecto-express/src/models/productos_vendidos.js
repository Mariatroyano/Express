const { Sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");
const FacturaVentas = require("./factura_ventas");


const ProductosVendidos = Sequelize.define(
    "productos_vendidos",
    {
        id_bill: {
            type: DataTypes.INTEGER,
            references: {
                model: FacturaVentas, 
                key: "id_bill",
            },
            allowNull: false,
        },
        unit_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        product: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity_sold: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        // schema: "proyecto_express", 
        tableName: "productos_vendidos", 
        timestamps: false, 
        primaryKey: {
            name: "primary_key_productos_vendidos", 
            fields: ["id_bill", "product"], 
        },
    }
);

module.exports = ProductosVendidos;
