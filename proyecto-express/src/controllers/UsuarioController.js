const Usuario = require("../models/Usuarios");

const Usuariosget = async (req, res) => {
  try {
    const users = await Usuario.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const UsuariosPost = async (req, res) => {
  const { UID_Usuario, Nombre, Email, Telefono, Direccion, EstadoCuenta } =
    req.body;

  try {
    const newUsuario = await Usuario.create({
      UID_Usuario,
      Nombre,
      Email,
      Telefono,
      Direccion,
      EstadoCuenta,
    });
    res.status(200).json(newUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//..................................................................................................................

const UsuariosPut = async (req, res) => {
  const { Nombre, Email, Telefono, Direccion, EstadoCuenta } = req.body;

  try {
    const putUsuario = await Usuario.Put({
      Nombre,
      Email,
      Telefono,
      Direccion,
      EstadoCuenta,
    });
    res.status(200).json(putUsuario);
  } catch (error) {
    res.status(400).json({ mesaje: error.message });
  }
};
//..........................................................................................................................

const UsuariosDelete = async (req, res) => {
  const { UID_Usuario, Nombre, Email, Telefono, Direccion, EstadoCuenta } =
    req.body;

  try {
    const delUsuario = await Usuario.Delete({
      UID_Usuario,
      Nombre,
      Email,
      Telefono,
      Direccion,
      EstadoCuenta,
    });
    res.status(200).json(delUsuario);
  } catch (error) {
    res.status(400).json({ mesaje: error.message });
  }
};

//:...................................................................

module.exports = { Usuariosget, UsuariosPost, UsuariosPut, UsuariosDelete };
