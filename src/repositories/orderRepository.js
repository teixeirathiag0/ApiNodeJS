'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const ValidationContract = require('../validators/fluent-validator');

exports.get = async(data) => {
    const res = await Order.find({});
    return res;
}

exports.post = async(data) => {
    var order = new Order(data);
    await order.save();
}