'use strict'
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection/connection');
const config = require('./configjs/config');

const app = express();
const router = express.Router();

//Carregando as Models
const Order = require('./models/order');
const Product = require('./models/product');
const Customer = require('./models/customer');

// Carrega as rotas
const indexRoutes = require('./routes/indexRoute');
const productRoutes = require('./routes/productRoute');
const customerRoutes = require('./routes/customerRoute');
const orderRoutes = require('./routes/orderRoute');
const authRoutes = require('./routes/authRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/customers', customerRoutes);

module.exports = app;