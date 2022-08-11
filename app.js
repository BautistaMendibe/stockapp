require('dotenv').config()
const mongoose = require('mongoose')
const path = require('path')
const express = require('express');
const { brotliDecompressSync } = require('zlib');

const app = express();

mongoose.connect(`mongodb+srv://bautistamendibe:${process.env.MONGO_DB_PASSWORD}@cluster0.kchck.mongodb.net/stock-app?retryWrites=true&w=majority`)
.then((result) => console.log("Conexión exitosa a la BD"))
.catch((error) => console.log(error));

const productSchema = mongoose.Schema({
    productName: {type: String, require: true},
    productPrice: {type: Number, require: true}
},
{
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.post('/products', async(req, res, next) => {
    
    const newProduct = new Product({
        productName: req.body.productName,
        productPrice: req.body.productPrice
    });

    // O directamente pasarle el req.body porque se corresponde al objeto que queremos
    //const newProduct = new Product(req.body)

    await newProduct.save().then(result => {
        res.status(201).json({ok:true});
    }).catch(e => {
        console.log(e);
    });
});

/* app.get('/', (req, res, next)=>{
    console.log('petición recibida');
    next()
}) */

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});