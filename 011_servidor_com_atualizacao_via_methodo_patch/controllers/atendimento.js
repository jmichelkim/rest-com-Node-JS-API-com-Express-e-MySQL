const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
        console.log('Página de atendimento geral acessada.')
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id, res)
        console.log('Página de atendimento individual acessada com o id = ' + id)
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        console.log('Dados enviados para validação')

        Atendimento.adiciona(atendimento, res)

        // console.log(req.headers)
        // console.log(req.body)
        
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        console.log(valores)
        Atendimento.altera(id, valores, res)
        // res.send('Atualização efetuada com sucesso!')
    })

}

// O que coloca no controllers como res.send vai para o usuário.
// O que coloca no models, vai para o terminal do servidor
// No res.send('Voce....), não estamos informando ao usuário casos de erro,
// ele sempre vai achar que teve sucesso!