const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res){
        const dataCriacao = new Date()
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro.sqlMessage)
            } else {
                res.status(201).json(resultados)
            }

        })
    }
}

module.exports = new Atendimento

// Atenção, aqui quando exporta uma classe tem que ter o new na frente.

// Onde colocar a validação de segurança: controllers
// Onde colocar a validação de Regras de Negócios: model