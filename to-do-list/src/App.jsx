import { useState } from 'react'
import { useEffect } from 'react'
import './css/App.css' 

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  async function getTarefa() {
    const response = await fetch("http://localhost:3000/tarefas"); // Fazendo uma requisição GET para obter as tarefas do backend
    const data = await response.json(); // Convertendo a resposta para JSON
    setTasks(data);
  }

  async function addTarefa() {

    if (task.trim() === "") {
      alert("Por favor, insira uma tarefa válida.");
      return;
    }
    await fetch("http://localhost:3000/tarefas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        titulo: task
      })
    });

    setTask("");
    getTarefa();
  }

  async function updateTarefa(id, statusAtual) {
    await fetch(`http://localhost:3000/tarefas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        concluido: !statusAtual
      })
    });

    getTarefa();
  }



async function deleteTarefa(id) {
  await fetch(`http://localhost:3000/tarefas/${id}`, {
    method: "DELETE"
  });
  getTarefa();
}

// Funcionalidade de marcar todas como concluídas
async function concluirTodas() {

  await Promise.all(

    tasks.map((item) => {

      return fetch(`http://localhost:3000/tarefas/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          concluido: true
        })
      });

    })

  );

  getTarefa();
}

// Funcionalidade de limpar todas as tarefas
async function deletarTudo() {

  await Promise.all(
    tasks.map((item) => {
      return fetch(`http://localhost:3000/tarefas/${item.id}`, {
        method: "DELETE"
      });
    })
  );
  getTarefa();
  }



  // useEffect para carregar as tarefas quando tiver a primeira renderização do componente
  useEffect(() => {
    getTarefa();
  }, []);





//* To Do List
  return(
<div className="App">
<div className="container-input">
  <div className="input-container">

    <div className="agrupado-inputs">
      <input 
        type="text" 
        placeholder="Adicione uma tarefa" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTarefa();
          }
        }}
      />

      <button onClick={addTarefa}>
        Adicionar
      </button>
    </div>

    <div className="Card-contagem">
      <span>Total de tarefas: {tasks.length}</span>

      <span>
        Concluídas: {
          tasks.filter((item) => item.concluido).length
        }
      </span>
    </div>

    <div className="Card-marcar-todas">
      <button onClick={concluirTodas}>
        Marcar todas como concluídas
      </button>
    </div>

  </div>
</div>

  <div className="container-tarefas">
  
  <button onClick={deletarTudo}>
    Limpar Tudo
  </button>

  <h2 id="tarefas">Tarefas</h2>


    <table>
      <tbody>
        {tasks.map((item) => (
          <tr key={item.id}>
            <td>
              <input 
              type="checkbox"
              checked={item.concluido}
              onChange={() => updateTarefa(item.id, item.concluido)}
              />
              
              <span style={{ textDecoration: item.concluido ? 'line-through' : 'none' }}>
                {item.titulo}
              </span>

              <button onClick={() => deleteTarefa(item.id)}>
                Excluir
              </button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

</div>
 )
}

export default App