let tarefas = []; // array em memória (sem banco de dados)

let identificador = 1; // identificador unico

function getTarefa(req, res) {
  res.status(200).json(tarefas);
}




function createTarefa(req, res) {
  const { titulo } = req.body;

  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({
      error: "Só aceito com título meu caro."
    });
  }

  const novaTarefa = {
    id: identificador++,
    titulo,
    concluido: false,
    criada: new Date()
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
}


function updateTarefa(req, res) {

const id = Number(req.params.id);

const {concluido} = req.body;

const tarefa = tarefas.find((item) => item.id === id)

if (!tarefa) {
  return res.status(404).json({
    error: "Tarefa não encontrada."
  });

tarefa.concluido = concluido;
res.status(200).json(tarefa);
}}

// Ainda ta faltando
function deleteTarefa(req, res) {

const id = Number(req.params.id);
const index = tarefas.findIndex((item) => item.id === id);

if (index === -1) {
  return res.status(404).json({
    error: "Tarefa não encontrada."
  });




}
};

module.exports = {
  getTarefa,
  createTarefa,
  updateTarefa,
  deleteTarefa
};