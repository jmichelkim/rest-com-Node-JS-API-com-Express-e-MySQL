const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        res.send('Página de atendimento acessada com sucesso!')
        console.log('Página de atendimento acessada')
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)

        // console.log(req.headers)
        // console.log(req.body)
        
        console.log('Atendimento adicionado com sucesso')
    })

}

// O que coloca no controllers como res.send vai para o usuário.
// O que coloca no models, vai para o terminal do servidor
// No res.send('Voce....), não estamos informando ao usuário casos de erro,
// ele sempre vai achar que teve sucesso!