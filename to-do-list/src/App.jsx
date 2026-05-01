import { useState } from 'react'
import './css/App.css' 

function App() {
//* To Do List
  return(
<div className="App">
  <h1>To Do List</h1>

  <div className="input-container">
    <div className="agrupado-inputs">
       <input type="text" placeholder="Adicione uma tarefa" />
       <button>Adicionar</button>
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
      <tr>
        <td><input type="checkbox" /> Tarefa 1</td>
      </tr>
      <tr>
        <td><input type="checkbox" /> Tarefa 2</td>
      </tr>
      <tr>
        <td><input type="checkbox" /> Tarefa 3</td>
      </tr>
    </table>
  </div>

</div>
 )
}
export default App
