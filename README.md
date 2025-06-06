
# 🍽️ Projeto Restaurante - CRUD de Pedidos

Este é um projeto simples de CRUD para um restaurante, onde o cliente faz o pedido através de um formulário web. Após o envio, o sistema exibe "Aguardando preparo" por 5 segundos e, em seguida, "Pedido pronto!". O pedido é armazenado em um banco de dados MySQL.

---

## 📂 Estrutura do Projeto

```
projeto-restaurante/
├── backend/
│   ├── db.js
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** HTML, CSS e JavaScript puro
- **Backend:** Node.js com Express
- **Banco de Dados:** MySQL (Docker ou local)
- **Servidores de desenvolvimento:** Live Server, Python HTTP Server ou Serve (Node)

---

## 🛠️ Pré-requisitos

- Node.js instalado
- MySQL rodando (Docker ou local)
- Navegador web
- (Opcional) VSCode com Live Server

---

## ⚙️ Configuração do Banco de Dados

1. Conecte-se ao MySQL via terminal:

```bash
mysql -h 127.0.0.1 -P 3306 -u admin -p
```

2. Crie o banco de dados e a tabela:

```sql
CREATE DATABASE IF NOT EXISTS restaurante;

USE restaurante;

CREATE TABLE IF NOT EXISTS pedido (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente VARCHAR(100) NOT NULL,
  item VARCHAR(100) NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ▶️ Como rodar o projeto

### ✅ Backend

1. Acesse a pasta `backend`:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install express mysql2 cors
```

3. Inicie o servidor:

```bash
node server.js
```

Se tudo estiver correto, você verá:

```
Conexão MySQL realizada com sucesso!
Servidor rodando na porta 3000
```

---

### ✅ Frontend

1. Acesse a pasta `frontend`.

2. Abra o arquivo `index.html` diretamente no navegador.

**OU** use um servidor local, por exemplo:

- **Live Server (VSCode):** Clique com o botão direito no `index.html` → `Open with Live Server`.
  
- **Serve (Node):**

```bash
npm install -g serve
serve frontend
```

- **Python HTTP Server:**

```bash
cd frontend
python -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

---

## ✅ Testando o sistema

1. Preencha seu nome e o item do pedido no formulário.
2. Clique em **"Enviar Pedido"**.
3. Mensagem "Aguardando preparo..." aparecerá.
4. Após 5 segundos → "Pedido pronto!".
5. O pedido será salvo no banco de dados.

---

## 🔍 Consultar pedidos no banco via terminal

1. Conecte-se ao MySQL:

```bash
mysql -h 127.0.0.1 -P 3306 -u admin -p
```

2. Execute:

```sql
USE restaurante;
SELECT * FROM pedido ORDER BY criado_em DESC;
```

---

## ❌ Parar o servidor

No terminal onde o backend está rodando, pressione:

```
Ctrl + C
```

---

## ✅ Considerações finais

- Projeto simples e didático, separando frontend e backend.
- Pode ser facilmente expandido para incluir funcionalidades como edição e remoção de pedidos.
- Pode evoluir para consumir APIs REST ou usar frameworks modernos.

---

## 👨‍💻 Autor

Desenvolvido como um exercício prático para entender o fluxo completo de criação de um CRUD utilizando Node.js, MySQL e frontend puro.
