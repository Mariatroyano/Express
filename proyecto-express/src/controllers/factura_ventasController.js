const FacturaVentas = require("../models/factura_ventas");

// Obtener todas las facturas de ventas
const FacturaVentasGet = async (req, res) => {
  try {
    const facturas = await FacturaVentas.findAll();
    res.json(facturas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear una nueva factura de venta
const FacturaVentasPost = async (req, res) => {
  const {
    ID_Factura,
    EstadoFactura,
    FechaPedidol,
    PrecioTotal, // Suponiendo que hay una relación con Usuario
  } = req.body;

  try {
    const nuevaFactura = await FacturaVentas.create({
      ID_Factura,
      EstadoFactura,
      FechaPedidol,
      PrecioTotal,
    });
    res.status(200).json(nuevaFactura);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { FacturaVentasGet, FacturaVentasPost };
