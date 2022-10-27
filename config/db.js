const sequelize = require ('./seq')
const colors = require ('colors')
const connectDB = async() =>{
    try {
    await sequelize.authenticate()
    console.log('Conexion exitosa'.bgBlue) 
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = connectDB