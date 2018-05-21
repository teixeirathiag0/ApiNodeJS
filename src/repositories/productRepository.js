'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');

exports.get = () => {
    return Product.find({
        active: true
    },'title price slug');
}

exports.getBySlug = (slug) => {
    return Product.findOne({
        slug: slug,
        active: true
    },'title description price slug tags');
}

exports.getById = (id) => {
    return Product.findById(id);
}

exports.getByTag = (tag) => {
    return Product.find({
        tags: tag,
        active: true
        },'title description price slug tags');
}

exports.post = (id, data) => {
    var product = new Product(data);
    return product.save();
}

exports.put = (data) => {
    return Product.findByIdAndUpdate(id,{
        $set: {
            title: data.title,
            slug: data.slug,
            description: data.description,
            price: data.price
        }
    });
}

exports.delete = (id) => {
    return Product.findOneAndRemove(id);
}