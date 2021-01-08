module.exports = app => {

    app.get('/atendimentos', (req, res) => res.send('Página de atendimento acessada com sucesso!'))

    app.post('/atendimentos', (req, res) => {

        console.log(req.body)
        
        res.send('Você acabou de realizar um post para o backend!')
    })

}
