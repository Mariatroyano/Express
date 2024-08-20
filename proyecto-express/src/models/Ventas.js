const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Ventas = sequelize.define(
  "Ventas",
  {
    ID_Venta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ID_Factura: {
      type: DataTypes.INTEGER,
      references: {
        model: "FacturaVentas", // Nombre del modelo al que hace referencia
        key: "ID_Factura", // Clave foránea
      },
    },
    FechaVenta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "Ventas",
    timestamps: false,
  }
);

module.exports = Ventas;
