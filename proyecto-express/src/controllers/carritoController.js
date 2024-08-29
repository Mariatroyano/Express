const CarritoCompras = require("../models/carritoCompras");

const CarritoComprasGet = async (req, res) => {
  try {
    const carritos = await CarritoCompras.findAll();
    res.json(carritos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const CarritoComprasGetByUsuario = async (req, res) => {
  try {
    const { UID_Usuario } = req.params;
    const carritos = await CarritoCompras.findOne({ where: { UID_Usuario } });

    res.json(carritos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//........................................................................................................
const CarritoComprasPost = async (req, res) => {
  const { ID_Productos, UID_Usuario } = req.body;

  try {
    const newCarrito = await CarritoCompras.create({
      ID_Productos,
      UID_Usuario,
    });
    res.status(201).json(newCarrito);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//.....................................................................................................
const CarritoComprasPut = async (req, res) => {
  const { ID_CarritoCompras } = req.params;

  const { ID_Productos } = req.body;

  try {
    const putCarritoCompra = await CarritoCompras.findByPk(
      parseInt(ID_CarritoCompras)
    );
    if (putCarritoCompra) {
      putCarritoCompra.ID_Productos = ID_Productos;

      await putCarritoCompra.save();
      res.json(putCarritoCompra);
    } else {
      console.log("Carrito Comprar no existe");
    }
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
//..............................................................................................
const CarritoComprassDelete = async (req, res) => {
  const { UID_CarritoCompras } = req.params;

  try {
    const delCarritoCompras = await CarritoCompras.findByPk(UID_CarritoCompras);
    if (delCarritoCompras) {
      await delCarritoCompras.destroy();
      res.json({ message: "usuario eliminado" });
    } else {
      res.json({ message: "usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ mesaje: error.message });
  }
};

module.exports = {
  CarritoComprasGet,
  CarritoComprasPost,
  CarritoComprasPut,
  CarritoComprassDelete,
  CarritoComprasGetByUsuario 
};
