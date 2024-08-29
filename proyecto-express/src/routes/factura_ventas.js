const express = require("express")
const { FacturaVentasGet, FacturaVentasPost,  FacturaVentasPut} =require("../controllers/factura_ventasController")

const router = express.Router()

router.get("/",  FacturaVentasGet)
router.post("/", FacturaVentasPost)
router.put("/", FacturaVentasPut)


module.exports = router