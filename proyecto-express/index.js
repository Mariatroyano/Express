// const cars = require("cart")
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const routerUsuarios = require("./src/routes/usuarios");
const routerFactura_ventas = require("./src/routes/factura_ventas");
const routerVentas = require("./src/routes/Ventas");
const routercarritoCompras = require("./src/routes/carritoCompras");

const { ConexionDB } = require("./src/config/database");

ConexionDB();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/factura_ventas", routerFactura_ventas);
app.use("/carritoCompras", routercarritoCompras);
app.use("/Ventas", routerVentas );
app.use("/Usuarios", routerUsuarios);

app.listen(port, () => {
  console.log(`ejecutando en http://localhost:${port} `);
});
