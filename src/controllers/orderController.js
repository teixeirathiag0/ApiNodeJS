const orderRepository = require('../repositories/orderRepository');
const guid = require('guid');
const emailService = require('../services/emailService');

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

exports.getById = async(req, res, next) => {
    try{
        var data = await orderRepository.getById(req.params.id);
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.post = async(req, res, next) => {

    try {
        await orderRepository.post({
            customer: req.body.customer,
            number: guid.raw().substring(0,6),
            items: req.body.items
        });

        emailService.send(
            req.body.email, 
            'Compra da Node Store',
            global.EMAIL_TMPLOrder.replace('{name}', req.body.name)
            .replace('{title}', req.body.items[{title: title}])
            .replace('{price}', req.body.items[{price: price}])
            .replace('{quantity}', req.body.items[{quantity: quantity}])
        );
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch(e){
        res.status(500).send({
            message: 'Erro ao cadastrar pedido!'
        });
    }
};
