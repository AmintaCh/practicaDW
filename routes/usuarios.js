const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.iniciarSesion('/', usuarioController.getUsuario);

module.exports = router;