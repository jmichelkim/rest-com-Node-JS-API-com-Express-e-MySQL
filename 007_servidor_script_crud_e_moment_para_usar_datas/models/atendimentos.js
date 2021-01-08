const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento){
        const dataCriacao = new Date()
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro){
                console.log(erro)
            } else {
                console.log(resultados)
            }

        })
    }
}

module.exports = new Atendimento

// Atenção, aqui quando exporta uma classe tem que ter o new na frente.