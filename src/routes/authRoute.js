'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const authService = require('../services/authService');

router.post('/', controller.authenticate);

module.exports = router;