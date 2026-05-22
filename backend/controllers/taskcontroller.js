let tarefas = []; // array em memória (sem banco de dados)

let identificador = 1; // identificador unico

function getTarefa(req, res) { // Get
  res.status(200).json(tarefas);
}




function createTarefa(req, res) { // Post
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


//corrigi a chave
function updateTarefa(req, res) { // Put

const id = Number(req.params.id);

const {concluido} = req.body;

const tarefa = tarefas.find((item) => item.id === id)

if (!tarefa) {
  return res.status(404).json({
    error: "Tarefa não encontrada."
  });
}

tarefa.concluido = concluido;
res.status(200).json(tarefa);
}






// corrigi a chave
function deleteTarefa(req, res) { // Delete

const id = Number(req.params.id);
const index = tarefas.findIndex((item) => item.id === id); // procura o índice da tarefa com o id fornecido

if (index === -1) {
    return res.status(404).json({
    error: "Tarefa não encontrada."
});
}

// corrigi, estava duplicado sem necessidade
tarefas.splice(index, 1); // aqui é onde a tarefa é removida do array

// So pode retornar um status
res.status(200).json({
  message: "Tarefa deletada com sucesso."});

}

module.exports = {
  getTarefa,
  createTarefa,
  updateTarefa,
  deleteTarefa
};