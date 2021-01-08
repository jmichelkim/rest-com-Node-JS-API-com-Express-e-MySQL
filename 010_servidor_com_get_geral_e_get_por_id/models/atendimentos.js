const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res){
        const dataCriacao = new Date()
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual.'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Nome do cliente deve ter pelo menos cinco caracteres.'
            }
        ]
        
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)

        } else {

            console.log(erros)

            const atendimentoDatado = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO Atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }

            })
        }
    }

    lista(res) {
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            
            const atendimento = resultados[0]

            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento)
            }
        })
    }

}

module.exports = new Atendimento

// Atenção, aqui quando exporta uma classe tem que ter o new na frente.

// Onde colocar a validação de segurança: controllers
// Onde colocar a validação de Regras de Negócios: model

// Estas mensagenssão como o servidor está configurado
// ele pode ter diversas configurações.