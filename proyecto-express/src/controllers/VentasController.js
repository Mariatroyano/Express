
const Venta = require("../models/Ventas");

const VentasGet = async (req, res) => {
  try {
    const ventas = await Venta.findAll();
    res.json(ventas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//............................................................................................................

const VentasPost = async (req, res) => {
  const {
    ID_Venta,
    ID_Factura,
    FechaVenta,
  } = req.body;

  try {
    const NewVenta = await Venta.create({
      ID_Venta,
      ID_Factura,
      FechaVenta,
    });
    res.status(200).json(NewVenta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = { VentasGet, VentasPost };
