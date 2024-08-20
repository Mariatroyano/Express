const express = require("express")
const {VentasGet, VentasPost} =require("../controllers/VentasController")
const { Routes } = require("react-router-dom")

const router = express.Router()

router.get("/",  VentasGet)
router.post("/", VentasPost)

module.exports = Routes