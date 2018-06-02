'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const ValidationContract = require('../validators/fluent-validator');

exports.get = async() => {
    const res = await Customer.find();
    return res;
}

exports.post = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}

exports.delete = async(id)=> {
    await Customer.findByIdAndRemove(id);
}
