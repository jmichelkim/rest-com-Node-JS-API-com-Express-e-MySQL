const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        res.send('Página de atendimento acessada com sucesso!')
        console.log('Página de atendimento acessada')
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)

        // console.log(req.headers)
        // console.log(req.body)
        
        res.send('Você acabou de realizar um post para o backend!')
    })

}
