const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente: String,
  item: String,
  quantidade: Number,
  status: { type: String, enum: ['Em Preparo', 'Pronto', 'Entregue'], default: 'Em Preparo' }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
