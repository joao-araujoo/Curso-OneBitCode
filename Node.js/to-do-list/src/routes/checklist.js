const express = require("express");
const Checklist = require("../models/checklist");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    res.status(200).render("checklists/index", { checklists: checklists });
  } catch (error) {
    res
      .status(500)
      .render("pages/error", { error: "Erro ao exibir as listas" });
  }
});

router.get('/new', async (req, res) => {
  try {
    let checklist = new Checklist();
    res.status(200).render("checklists/new", { checklist });
  } catch (error) {
    res
      .status(500)
      .render("pages/error", { error: "Erro ao carregar o formulário" });
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body.checklist;

  try {
    await Checklist.create({ name });
    res.redirect('/checklists');
  } catch (error) {
    res
      .status(500)
      .render("pages/error", { error: "Erro ao criar checklist" });
  
  }
});

// tudo que vem antes do ":" é identificado como parâmetro, que pode ser acessado pelo objetoç "params" da requisição
router.get("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).render("checklists/show", { checklist: checklist });
  } catch (error) {
    res
      .status(500)
      .render("pages/error", { error: "Erro ao exibir a lista de tarefas" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let { name } = req.body;

    let checklist = await Checklist.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndDelete(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
