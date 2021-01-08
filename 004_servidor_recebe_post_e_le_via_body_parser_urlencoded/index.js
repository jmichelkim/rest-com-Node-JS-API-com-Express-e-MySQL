const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3000, () => console.log('Servidor on line na porta 3000.'))

// Recebe Post, dá pra usar o postman como formulário
// Captura os dados do formulário e exibe no formato json
// Biblioteca body-Parser para conseguir ler os dados que chegam do formulario