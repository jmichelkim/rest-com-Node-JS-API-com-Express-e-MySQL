class Tabelas {
    init(conexao){
        console.log('Classe Tabela acessada com sucesso')
        this.conexao = conexao
        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        
        this.conexao.query(sql, erro => {
            if (erro){
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso.')
            }
        })
    }
}

module.exports = new Tabelas 


// Script de alteração de bd mysql no arquivo infraestrutura > tabelas.

// Alterar tabela no mysql adicionando duas colunas.
// ALTER TABLE `agenda-petshop`.atendimentos add data datetime NOT NULL, add dataCriacao datetime NOT NULL;

// Criar table 
// const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
