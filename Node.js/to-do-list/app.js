const express = require('express');
const PORT = 3000;

const app = express();

// middleware utilizado para proporcionar corretamente o json no corpo da requisição e tornar o "req.body" utilizável
app.use(express.json());

// o next é o parâmetro que permite que o middleware passe para o próximo, no método chamado "chain of responsability" 
const log = (req, res, next) => {
  console.log(req.body);
  console.log(`Data: ${Date.now()}`);
  next();
}

app.use(log)

app.get('/', (req, res) => {
  res.send('<h1>Minha lista de Tarefas =)</h1>');
})

app.get('/json', (req, res) => {
  res.json({ title: "Tarefa X", done: true });
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})