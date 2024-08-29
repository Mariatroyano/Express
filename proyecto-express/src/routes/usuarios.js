const express = require("express");
const {
  UsuariosPost,
  Usuariosget,
  UsuariosPut,
  UsuariosDelete,
} = require("../controllers/UsuarioController");

const router = express.Router();

router.get("/", Usuariosget);
router.post("/", UsuariosPost);
router.put("/:UID_Usuario", UsuariosPut);
router.delete("/:UID_Usuario", UsuariosDelete);

module.exports = router;
