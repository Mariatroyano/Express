const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Usuario = sequelize.define(
  "Usuario",
  {
    UID_Usuario: {
      type: DataTypes.STRING(255),
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING(255),
      // allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(255),
      // allowNull: false,
      unique: true,
    },
    Telefono: {
      type: DataTypes.STRING(30),
    },
    Direccion: {
      type: DataTypes.TEXT,
    },
    EstadoCuenta: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
  },
  {
    tableName: "Usuario",
    timestamps: false,
  }
);

module.exports = Usuario;
