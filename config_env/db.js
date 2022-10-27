const mongoose = require('mongoose')
const url="mongodb://localhost:27017"
/* Componente funcional */
const connectDB = async () =>{
    const con = await mongoose.connect(url,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('Conectado a',con.connection.host)
}

connectDB() 