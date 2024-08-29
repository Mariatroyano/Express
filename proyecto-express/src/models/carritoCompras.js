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
    ID_Productos: {
      type: DataTypes.JSONB,
    },
    UID_Usuario: {
      type: DataTypes.STRING(255),
      allowNull: false,
      onDelete: "CASCADE",
      references: {
        model: "Usuario",
        key: "UID_Usuario",
      },
    },
  },
  {
    tableName: "CarritoCompras",
    timestamps: false,
  }
);

module.exports = CarritoCompras;
