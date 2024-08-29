const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const FacturaVentas = sequelize.define(
  "FacturaVentas",
  {
    ID_Factura: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    EstadoFactura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FechaPedido: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UID_Usuario: {
      type: DataTypes.STRING(255),
      onDelete: "CASCADE",
      references: {
        model: "Usuario",
        key: "UID_Usuario",
      },
    },
    ID_Productos: {
      type: DataTypes.JSONB,
    },
    PrecioTotal: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    tableName: "FacturaVentas",
    timestamps: false, // Disabling the timestamps
  }
);

module.exports = FacturaVentas;
