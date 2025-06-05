const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

app.use('/pedidos', pedidoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));