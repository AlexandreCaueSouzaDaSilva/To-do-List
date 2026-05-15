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


  useEffect(() => {
    getTarefa();
  }, []);


//* To Do List
  return(
<div className="App">
  <h1>To Do List</h1>

  <div className="input-container">
    <div className="agrupado-inputs">
       <input 
       type="text" 
       placeholder="Adicione uma tarefa" 
       value={task}
       onChange={(e) => setTask(e.target.value)}
       />
       <button onClick={addTarefa}>Adicionar</button>
    </div>


    <div>
      <button>Limpar</button>
      <button>Excluir tarefa</button>
      <button>Marcar todas como concluídas</button>
    </div>
  </div>


  <div className="container-tarefas">
  <button>Editar Tarefas</button> <button>Limpar Tudo</button>

  <h2>Tarefas</h2>


    <table border={1}>
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