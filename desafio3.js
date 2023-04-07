const express = require('express')
const app = express
const ProductManager = require('./desafio1.js')

app.get('/products', (req,res) => {
    const manager = new ProductManager()
    const products = manager.getProducts()
    res.status(200).send({ products})

})
