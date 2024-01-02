const express = require('express');
const checkListRouter = require('./src/routes/checklist');
const PORT = 3000;

const app = express();

app.use(express.json());

// podemos utilizar o parâmetro para o caminho, sendo assim, todas as rotas do arquivo importado iniciarão com tal caminho especificado
app.use('/checklists', checkListRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})