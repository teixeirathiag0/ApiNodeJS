'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const authService = require('../services/authService');

router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshToken);

module.exports = router;