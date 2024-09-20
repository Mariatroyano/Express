const express = require("express");
const {
  UsuariosPost,
  Usuariosget,
  UsuariosPut,
  UsuariosDelete,
  UsuariosgetById,
} = require("../controllers/UsuarioController");

const router = express.Router();

router.get("/", Usuariosget);
router.get("/id/:id_usuario", UsuariosgetById);
router.post("/", UsuariosPost);
router.put("/:UID_Usuario", UsuariosPut);
router.delete("/:UID_Usuario", UsuariosDelete);

module.exports = router;
