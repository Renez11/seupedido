const express = require('express');
const router = express.Router();
const Pedido = require('../models/Pedido');

router.post('/', async (req, res) => {
  const novoPedido = new Pedido(req.body);
  await novoPedido.save();
  res.json(novoPedido);
});

router.get('/', async (req, res) => {
  const pedidos = await Pedido.find();
  res.json(pedidos);
});

router.put('/:id', async (req, res) => {
  const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(pedido);
});

router.delete('/:id', async (req, res) => {
  await Pedido.findByIdAndDelete(req.params.id);
  res.json({ message: 'Pedido removido' });
});

module.exports = router;
