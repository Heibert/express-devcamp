/* 1. Crear la dependencia a express */
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const listEndpoints = require('express-list-endpoints')
const connectDB = require('./config/db')
/* Dependencias de rutas */
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require ('./routes/UserRoutes')
const cursoRoutes = require('./routes/CursoRoutes')


/* Definiendo archivo .env */
dotenv.config({
    path: './config/config.env'
})
/* 2. Crear el objeto app con express */
const app = express() 

app.use(express.json())
//conectar bd
connectDB()
/* Relacionar rutas de dominio */
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/curso', cursoRoutes)
app.use('/api/v1/users', userRoutes)
/* 3. Iniciar el servidor de desarrollo de express */
app.get('/', (request, response)=>{
    response.send('La ruta esta bien')
})
//Consultar rutas del proyecto
console.log(listEndpoints(app))

app.listen(process.env.PORT, ()=>{
    console.log('servidor inicado'.bgGreen)
})
