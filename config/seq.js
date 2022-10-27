const Sequelize = require ('sequelize')
const dotenv = require ('dotenv')
//Establecer ruta al config.env
dotenv.config({
    path:'./config_env/config.env'
})
//Crear objeto de conexion
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_MOTOR
    }
)

module.exports = sequelize