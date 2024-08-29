const express = require("express")
const {CarritoComprasGet , CarritoComprasPost,CarritoComprasPut,CarritoComprassDelete,CarritoComprasGetByUsuario} =require("../controllers/carritoController")

const router = express.Router()

router.get("/", CarritoComprasGet)

router.post("/", CarritoComprasPost)
router.put("/id/:ID_CarritoCompras", CarritoComprasPut)
router.get("/UID_Usuario/:UID_Usuario", CarritoComprasGetByUsuario)
router.delete("/uid/:ID_CarritoCompras",CarritoComprassDelete)

module.exports = router