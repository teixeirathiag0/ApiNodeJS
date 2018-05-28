'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connection = require('./connection/connection');

const app = express();
const router = express.Router();

//Carregando as Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega das rotas
const indexRoutes = require('./routes/indexRoute');
const productRoutes = require('./routes/productRoute');
const customerRoutes = require('./routes/customerRoute');
const orderRoutes = require('./routes/orderRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

module.exports = app;