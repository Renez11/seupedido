const btnPedido = document.getElementById('btnPedido');
const statusEl = document.getElementById('status');

btnPedido.addEventListener('click', async () => {
  const cliente = document.getElementById('cliente').value.trim();
  const item = document.getElementById('item').value.trim();

  if (!cliente || !item) {
    alert('Preencha nome e item.');
    return;
  }

  statusEl.innerText = 'Enviando pedido...';

  try {
    const res = await fetch('http://localhost:3000/pedido', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cliente, item })
    });

    if (!res.ok) throw new Error('Erro na requisição');

    await res.json();

    statusEl.innerText = 'Pedido recebido, aguardando preparo...';

    setTimeout(() => {
      statusEl.innerText = 'Pedido pronto!';
    }, 5000);
  } catch (err) {
    statusEl.innerText = 'Erro ao enviar pedido.';
    console.error(err);
  }
});
