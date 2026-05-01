const express = require("express");
const router = express.Router(); // Criando um roteador para as rotas relacionadas às tarefas

const {
  getTarefa,
  createTarefa,
  updateTarefa,
  deleteTarefa
} = require("../controllers/taskController");

// Cada rota chama uma função diferente pra lidar com o Crud de tarefas
router.get("/", getTarefa);
router.post("/", createTarefa);
router.put("/:id", updateTarefa);
router.delete("/:id", deleteTarefa);

module.exports = router;