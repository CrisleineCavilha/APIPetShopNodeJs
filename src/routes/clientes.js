const express = require('express');
const controllerClientes = require('../controllers/clientes.js');

const controller = new controllerClientes();

const router = express.Router();

router.get('/api/cliente/:idCliente', controller.ConsultarUm);
router.get('/api/cliente', controller.ConsultarTodos);
router.post('/api/cliente', controller.Create);
router.put('/api/cliente/:idCliente', controller.Update);
router.delete('/api/cliente/:idCliente', controller.Delete);


module.exports = router


