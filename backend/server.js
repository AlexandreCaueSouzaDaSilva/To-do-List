const express = require('express');
const cors = require('cors');
// Importando as rotas de tarefas
const tarefasRoutes = require('./routes/tarefas');

const app = express();
const PORT = 3000; // minha ports

// Middleware para permitir requisições de diferentes origens (CORS) e para analisar o corpo das requisições como JSON
app.use(cors());
app.use(express.json()); // Para analisar o corpo das requisições como JSON por padrão 

app.use('/tarefas', tarefasRoutes); // Usando as rotas de tarefas para qualquer requisição que comece com /tarefas



app.get('/', (req, res) => {
    res.json({ message: "API ta funcionando!" }); // api
});


// Runner do Server 
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Erro em Startar o Server na Porta: ${PORT}:`, err); // Log de erro caso o servidor não consiga iniciar
  } else {
    console.log(`Server rodando em... ${PORT}`);
  }
});