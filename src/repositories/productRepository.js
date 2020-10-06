'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');

exports.get = async() => {
    const res = await Product.find({
        active: true
    },'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product.findOne({
        slug: slug,
        active: true
    },'title description price slug tags');
    return res;
}

exports.getById = async(id) => {
    const res = await Product.findById(id);
    return res;
}

exports.getByTag = async(tag) => {
    const res = await Product.find({
        tags: tag,
        active: true
        },'title description price slug tags');
    return res;
}

exports.post = async(data) => {
    const product = new Product(data);
    await product.save();
}

exports.put = async(id, data) => {
    await Product.findByIdAndUpdate(id,{
        $set: {
            title: data.title,
            slug: data.slug,
            description: data.description,
            price: data.price
        }
    });
}

exports.delete = async(id) => {
    await Product.findOneAndRemove(id);
}