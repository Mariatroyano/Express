const CarritoCompras = require("../models/carritoCompras");

const CarritoComprasGet = async (req, res) => {
  try {
    const carritos = await CarritoCompras.findAll();
    res.json(carritos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const CarritoComprasPost = async (req, res) => {
  const {
    ID_Carrito,
    EstadoFactura,
    ID_Productos, // Suponiendo que es una lista de productos
    UID_Usuario,
  } = req.body;

  try {
    const newCarrito = await CarritoCompras.create({
      ID_Carrito,
      EstadoFactura,
      ID_Productos, 
      UID_Usuario,
    });
    res.status(201).json(newCarrito);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { CarritoComprasGet, CarritoComprasPost };
