const http = require('http');
const express = require('express');
const Container = require('./contenedor')
const app = express();
const PORT = 8080;
let products = null;

function onInit() {
    console.log('Iniciando App...');
    products = getAllProducts();
    console.log('Productos cargados: ', products);

}

/** EJEMPLOS */
const mensaje = () => {
    return 'Hola mundo desde NodeJS'
}

// app.get('/',(req, res) =>{
//     res.send(mensaje());
// });

// app.get('/frutas', (req, res) => {
//     res.send(['pera, banana, manzana, uva']);
// });

// app.get('/render', (req, res) => {
//     res.send(['<h1 style="color:blue;">Soy un H1 desde NodeJs</h1>']);
// });

app.get('/',(req, res) =>{
    res.send('<h1>Desafío 3 - NodeJS - Tutora: Laura Acuña</h1>');
});

app.get('/products',(req, res) =>{
    res.send(products);
});

app.get('/productRandom',(req, res) =>{
    res.send(getProductRandom());
});

function getAllProducts(){
    const container = new Container();
    const file = './products.txt';
    const allProductsArray = container.read(file);
    return allProductsArray;
}

function getProductRandom () {
    const container = new Container();
    const file = './products.txt';
    const allProductsArray = container.read(file);
    const randomIndex = Math.floor(Math.random() * allProductsArray.length);
    return allProductsArray[randomIndex];
}

onInit();

app.listen(8000);
console.log('Server running on port ' + PORT);