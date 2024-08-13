const {Sequelize} = require("sequelize")
const sequelize = new sequelize("proyecto_express","maria","postgre",{
    post:"localhost",
    dialect:"postgres",
    logging:false,
});
const ConexionDB = ()=>{
    sequelize
    .sync()
    .then(()=> console.log("conectado a la base de datos"))
    .catch((err)=> console.log("error al conectar la base de datos"))

}

module.exports(ConexionDB,sequelize)

