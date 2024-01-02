const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Checklists');
  res.send();
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

// tudo que vem antes do ":" é identificado como parâmetro, que pode ser acessado pelo objetoç "params" da requisição
router.get('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(`ID: ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(`PUT ID: ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(`DELETE ID: ${req.params.id}`);
});

module.exports = router;