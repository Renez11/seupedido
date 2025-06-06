const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'admin123',
  database: 'restaurante',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Testar conexão uma vez ao iniciar:
pool.getConnection((err, conn) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err.message);
  } else {
    console.log('Conexão MySQL realizada com sucesso!');
    conn.release();
  }
});

module.exports = pool.promise();
