'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var object = {
    nome: 'Thiago',
    idade: '21',
    profissao: 'Desenvolvedor'
};

JSON.stringify(object);

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        object
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});


app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);


module.exports = app;