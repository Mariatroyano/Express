const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("proyecto_final", "maria", "12345678", {
  post: "localhost",
  dialect: "postgres",
  logging: false,
});
const ConexionDB = () => {
  sequelize
    .sync()
    .then(() => console.log("conectado a la base de datos"))
    .catch((err) => console.log("error al conectar la base de datos", err));
};

module.exports = { ConexionDB, sequelize };
