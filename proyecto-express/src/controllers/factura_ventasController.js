const FacturaVentas = require("../models/factura_ventas");

const FacturaVentasGet = async (req, res) => {
  try {
    const facturas = await FacturaVentas.findAll();
    res.json(facturas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//..........................................................................................................

const FacturaVentasPost = async (req, res) => {
  const { EstadoFactura, FechaPedido, UID_Usuario, ID_Productos, PrecioTotal } =
    req.body;
  console.log(req.body);

  try {
    const nuevaFactura = await FacturaVentas.create({
      EstadoFactura,
      FechaPedido,
      UID_Usuario,
      ID_Productos,
      PrecioTotal,
    });
    res.status(200).json(nuevaFactura);
  } catch (error) {
    console.log('error');
    
    res.status(400).json({ message: error.message });
  }
};
//..............................................................................................................

const FacturaVentasPut = async (req, res) => {
  const {
    ID_Factura,
    EstadoFactura,
    FechaPedido,
    UID_Usuario,
    ID_Productos,
    PrecioTotal,
  } = req.body;

  try {
    const PutFactura = await Factura.Put({
      ID_Factura,
      EstadoFactura,
      FechaPedido,
      UID_Usuario,
      ID_Productos,
      PrecioTotal,
    });
    res.status(200).json(PutFactura);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { FacturaVentasGet, FacturaVentasPost, FacturaVentasPut };
