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


function updateTarefa(req, res) {} // falta implementar

function deleteTarefa(req, res) {} // Falta implementar

module.exports = {
  getTarefa,
  createTarefa,
  updateTarefa,
  deleteTarefa
};