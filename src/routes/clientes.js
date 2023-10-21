const express = require('express');
const controllerClientes = require('../controllers/clientes.js');
const authMiddleware = require('../middleware/auth')

const controller = new controllerClientes();
const router = express.Router();

router.post('/api/login', controller.Login)
router.get('/api/cliente/:idCliente', authMiddleware, controller.ConsultarUm);
router.get('/api/cliente',authMiddleware, controller.ConsultarTodos);
router.post('/api/cliente',authMiddleware, controller.Create);
router.put('/api/cliente/:idCliente',authMiddleware, controller.Update);
router.delete('/api/cliente/:idCliente',authMiddleware,controller.Delete);


module.exports = router



 