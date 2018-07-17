'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');

router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/:id', controller.del);
router.get('/admin/:id', controller.getById);
router.post('/authenticate', controller.authenticate);


module.exports = router;