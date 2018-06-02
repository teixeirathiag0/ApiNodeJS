'use strict'

var config = require('../config');
var sendGrid = require('sendgrid')(config.sendgridKey);

exports.send = async(to, subject, body) =>{
    sendGrid.send({
        to: to,
        from: 'thiagogabriel76@gmail.com',
        subject: subject,
        html: body 
    });
}