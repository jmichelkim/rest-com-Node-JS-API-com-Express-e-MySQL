const express = require('express')

const app = express()

app.listen(3000, () => console.log('Servidor on line na porta 3000.'))

app.get('/atendimentos', (req, res) => res.send('Página de atendimento acessa com sucesso total!'))

// Para subir o servidor aqui tem que utilizar o "npm start".

// Temos apenas uma rota cadastrada /atendimentos.

// O nodemon faz o restart do servidor automaticamente nos dando agilidade no desenvolviemento.