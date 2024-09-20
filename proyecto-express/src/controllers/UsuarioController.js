const Usuario = require("../models/Usuarios");

const Usuariosget = async (req, res) => {
  try {
    const users = await Usuario.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//.......................................................................................................................
const UsuariosgetById = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const users = await Usuario.findByPk(id_usuario);
    if (users) {
      res.json(users);
    } else {
      res.json({ mesaje: "no existe el usuario" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//.......................................................................................................................

const UsuariosPost = async (req, res) => {
  const { UID_Usuario, Nombre, Email, Telefono, Direccion, EstadoCuenta } =
    req.body;
  console.log(req.body);
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
    console.log(error.message);
  }
};
//..................................................................................................................

const UsuariosPut = async (req, res) => {
  const { UID_Usuario } = req.params;

  const { Nombre, Email, Telefono, Direccion, EstadoCuenta } = req.body;

  try {
    const putUsuario = await Usuario.findByPk(UID_Usuario);

    if (putUsuario) {
      console.log(req.body);
      putUsuario.Nombre = Nombre;
      putUsuario.Email = Email;
      putUsuario.Telefono = Telefono;
      putUsuario.Direccion = Direccion;
      putUsuario.EstadoCuenta = EstadoCuenta;
      await putUsuario.save();
      res.json(putUsuario);
    } else {
      console.log("usuario no existe");
    }
    // res.status(200).json(putUsuario);
  } catch (error) {
    res.status(400).json({ mesaje: error.message });
  }
};
//..........................................................................................................................

const UsuariosDelete = async (req, res) => {
  const { UID_Usuario } = req.params;

  try {
    const delUsuario = await Usuario.findByPk(UID_Usuario);
    if (delUsuario) {
      await delUsuario.destroy();
      res.json({ message: "usuario eliminado" });
    } else {
      res.json({ message: "usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ mesaje: error.message });
  }
};

//:...................................................................

module.exports = {
  Usuariosget,
  UsuariosPost,
  UsuariosPut,
  UsuariosDelete,
  UsuariosgetById,
};
