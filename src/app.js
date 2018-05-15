'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connection = require('./connection/connection');

const app = express();
const router = express.Router();

//Carregando as Models
const Product = require('./models/product');

// Carrega das rotas
const indexRoutes = require('./routes/indexRoute');
const productRoutes = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoutes);
app.use('/products', productRoutes);

module.exports = app;