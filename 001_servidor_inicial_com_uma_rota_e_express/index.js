const express = require('express')

const app = express()

app.listen(3000, () => console.log('Servidor on line na porta 3000.'))

app.get('/atendimentos', (req, res) => res.send('Página de atendimento acessa com sucesso!'))

// Para subir o servidor aqui tem que utilizar o "node index.js".

// Temos apenas uma rota cadastrada /atendimentos.