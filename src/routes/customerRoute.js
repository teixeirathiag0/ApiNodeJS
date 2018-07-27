'use strict'

const express = require('express');
const router = express.Router();
const authService = require('../services/authService');
const controller = require('../controllers/customerController');
const authController = require('../controllers/authController');

router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/:id', controller.del);
router.get('/admin/:id', controller.getById);
router.post('/authenticate', authController.authenticate);
router.post('/refresh-token', authService.authorize, authController.refreshToken);

module.exports = router;