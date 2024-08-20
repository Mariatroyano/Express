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
      type: DataTypes.STRING(50),
    },
    FechaPedido: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    PrecioTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "FacturaVentas",
    timestamps: false,
  }
);

module.exports = FacturaVentas;
