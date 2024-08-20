const express = require("express")
const {CarritoComprasGet , CarritoComprasPost} =require("../controllers/carritoController")
const { Routes } = require("react-router-dom")

const router = express.Router()

router.get("/", CarritoComprasGet)
router.post("/", CarritoComprasPost)

module.exports = Routes