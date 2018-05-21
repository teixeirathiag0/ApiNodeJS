'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const productRepository = require('../repositories/productRepository');

exports.get = (req, res, next) => {
    productRepository.get().then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });
}

exports.getBySlug = (req, res, next) => {
        productRepository.getBySlug(req.params.slug).then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });
}

exports.getById = (req, res, next) => {
        productRepository.getById(req.params.id).then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });
}

exports.getByTag = (req, res, next) => {
    productRepository.getByTag(req.params.tag).then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    });
}

exports.post = (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.slug, 5, 'O slug deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.description, 10, 'A título deve conter pelo menos 10 caracteres');

    if(!contract.isValid()){
        res.status(400).send(contract.errors().end());
        return;
    }
    productRepository.post(req.body).then(x=>{
        res.status(201).send({message: 'Produto cadastrado com sucesso!'});
    }).catch(e=> {
        res.status(400).send({message: 'Falha ao cadastrar produto!', data: e});
    });
};

exports.put = (req, res, next) => {
    productRepository.put(req.params.id, req.body).then(x=> {
        res.status(201).send({
            message: 'Produto atualizado com sucesso!'
        });
    }).catch(e => {
        req.status(404).send({
            message: 'Falha ao atualizar produto!',
            data: e
        });
    });
}

exports.del = (req, res, next) => {
    productRepository.delete(req.params.id).then(x=> {
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover produto!',
            data: e
        });
    })
}
