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


// Criada a conexão como banco de dados (pasta infraestrutura / conexao)
// Criada a classe Tabelas, onde cria uma tabela caso não exista no banco de dados (Tabelas.init(conexao)).
// Criada a classe Atendimento, no models, onde faz a inclusão no banco do antendimento enviado
// via postman com formulário.
// Quando utliza o module.exports para uma classe utliza o new. Ver na classe atendimento.
// Funcionou!!!!!!!!