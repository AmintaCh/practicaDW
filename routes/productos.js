const express = require('express');
const router = express.Router();
const productosController = require('../controller/productosController');

router.get('/list', productosController.getProductos);

module.exports = router;
