'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async(data) => {
    const res = await Order.find({});
    return res;
}

exports.getById = async(id) =>{
    const res = await Order.findById(id);
    return res;
}

exports.post = async(data) => {
    var order = new Order(data);
    await order.save();
}

exports.getItems = async(data) => {
    const res = await Order.findOne({
        id: 'ObjectId'
    }, 'items.title, items.price, items.quantity');
    return res;
}