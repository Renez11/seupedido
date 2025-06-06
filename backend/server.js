const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Rota para inserir pedido
app.post('/pedido', async (req, res) => {
  const { cliente, item } = req.body;
  if (!cliente || !item) {
    return res.status(400).json({ error: 'Cliente e item são obrigatórios' });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO pedido (cliente, item) VALUES (?, ?)',
      [cliente, item]
    );
    res.json({ message: 'Pedido criado', id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao inserir pedido' });
  }
});

// Rota para listar pedidos (opcional)
app.get('/pedido', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM pedido ORDER BY criado_em DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar pedidos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
