const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {

    if(erro){

        console.log(erro)

    } else {

        console.log('Conectado ao banco de dados com sucesso.')

        Tabelas.init(conexao)

        const app = customExpress()

        app.listen(3000, () => console.log('Servidor on line na porta 3000.'))

    }
})


// Aqui temos um script para alterar manipular um bd no mysql, ou qualquer outro banco desde
// que realizadas as devidas alterações.

// utilizou a biblioteca moment para manipulacao de datas