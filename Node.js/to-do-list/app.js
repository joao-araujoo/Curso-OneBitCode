const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Minha lista de Tarefas =)</h1>');
})

app.get('/json', (req, res) => {
  res.json({ title: "Tarefa X", done: true });
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})