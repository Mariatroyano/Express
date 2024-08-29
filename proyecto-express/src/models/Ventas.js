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
      onDelete: "CASCADE",
      references: {
        model: "FacturaVentas",
        key: "ID_Factura",
      },
    },
    FechaVenta: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Asigna la fecha y hora actuales por defecto
    },
  },
  {
    tableName: "Ventas",
    timestamps: false,
  }
);

module.exports = Ventas;
