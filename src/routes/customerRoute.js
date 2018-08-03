'use strict'

const express = require('express');
const router = express.Router();
const authService = require('../services/authService');
const controller = require('../controllers/customerController');

router.get('/', controller.get);
router.get('/admin/:id', controller.getById);
router.post('/', controller.post);
router.delete('/:id', controller.del);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshToken);

module.exports = router;