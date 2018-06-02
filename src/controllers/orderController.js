'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Order');
const ValidationContract = require('../validators/fluent-validator');
const productRepository = require('../repositories/orderRepository');
const guid = require('guid');

exports.get = async(req, res, next) => {
    try{
        var data = await orderRepository.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};

exports.post = async(req, res, next) => {

    let data = {
        customer: req.body.customer,
        number: guid.raw().substring(0,6),
        items: req.body.items
    }

    try{
        await orderRepository.post(req.body.data);
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    }catch(e){
        res.status(500).send({
            message: 'Erro ao cadastrar pedido!'
        });
    }
};