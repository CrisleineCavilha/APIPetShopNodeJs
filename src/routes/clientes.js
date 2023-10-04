const express = require('express');
const controllerClientes = require('../controllers/clientes.js');

const controller = new controllerClientes();

const router = express.Router();

router.get('/api/cliente/:id', controller.ConsultarUm);
router.get('/api/cliente', controller.ConsultarTodos);
router.post('/api/cliente', controller.Create);
router.put('/api/cliente/:id', controller.Update);
router.delete('/api/cliente/:id', controller.Delete);


module.exports = router


