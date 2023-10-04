const express = require('express');
const controllerPetShop = require('../controllers/petshop.js');

const controller = new controllerPetShop();
const router = express.Router();

router.get('/api/cliente/:id', controller.ConsultarUm);
router.get('/api/cliente', controller.ConsultarTodos);
router.post('/api/cliente', controller.Create);
router.put('/api/cliente/:id', controller.Update);
router.delete('/api/cliente/:id', controller.Delete);

module.exports = router


