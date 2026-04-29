const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware para permitir requisições de diferentes origens (CORS) e para analisar o corpo das requisições como JSON
app.use(cors());
app.use(express.json()); // Para analisar o corpo das requisições como JSON por padrão 

// Rota de teste para verificar a conexão entre o front-end e o back-end ( pra n me perder por hora)
app.get('/', (req, res) => {
    res.send(["te escuto..."]) // testando pela primeira vez a conexão entre o front e o back, depois vou substituir por uma resposta mais adequada
})

// Runner do Server 
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Erro em Startar o Server na Porta: ${PORT}:`, err); // Log de erro caso o servidor não consiga iniciar
  } else {
    console.log(`Server rodando em... ${PORT}`);
  }
});