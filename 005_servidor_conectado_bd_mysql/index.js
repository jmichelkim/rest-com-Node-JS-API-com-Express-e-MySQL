const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect(erro => {

    if(erro){

        console.log(erro)

    } else {

        console.log('Conectado ao banco de dados com sucesso.')

        const app = customExpress()

        app.listen(3000, () => console.log('Servidor on line na porta 3000.'))

    }
})


// Criada a conexão como banco de dados (pasta infraestrutura / conexao)

// neste aquivo primeiro é feita a conexão com o bd, caso dê sucesso segue para subir
// o servidor, caso contrário exibe erro.