const express = require("express")
const { FacturaVentasGet, FacturaVentasPost} =require("../controllers/factura_ventasController")
const { Routes } = require("react-router-dom")

const router = express.Router()

router.get("/",  FacturaVentasGet)
router.post("/", FacturaVentasPost)

module.exports = Routes