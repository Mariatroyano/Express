const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const CarritoCompras = sequelize.define(
  "CarritoCompras",
  {
    ID_Carrito: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    EstadoFactura: {
      type: DataTypes.STRING(50),
    },
    ID_Productos: {
      type: DataTypes.JSONB,
    },
    UID_Usuario: {
      type: DataTypes.STRING(255),
      references: {
        model: "Usuario", // Nombre del modelo al que hace referencia
        key: "UID_Usuario", // Clave foránea
      },
    },
  },
  {
    tableName: "CarritoCompras",
    timestamps: false,
  }
);

module.exports = CarritoCompras;
