'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const authService = require('../services/authService');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/tags/:tag', controller.getByTag);
router.get('/admin/:id', controller.getById);
router.post('/', authService.authorize, controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.del);

module.exports = router;