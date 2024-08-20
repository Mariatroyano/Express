const express = require("express")
const {UsuariosPost,Usuariosget,UsuariosPut,UsuariosDelete } = require("../controllers/UsuarioController")
const { Routes } = require("react-router-dom")

const router = express.Router()

router.get("/",Usuariosget )
router.post("/", UsuariosPost)
router.put("/", UsuariosPut)
router.delete("/", UsuariosDelete)




module.exports = Routes