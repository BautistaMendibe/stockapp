require('dotenv').config()
const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    console.log("Petición recibida")
    res.send("<h1>HOLA A TODOS</h1>")
});

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});