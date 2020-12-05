
class Tabelas{
    inicializa(conexao){
        this.conexao=conexao
        this.criarTabelaLivros()
    }

    criarTabelaProdutos(){ // metodo é um funcao dentro de uma classe

        const sql = 'CREATE TABLE IF NOT EXISTS produtos (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, laboratorio varchar(50), preco REAL, descricao text, PRIMARY KEY(id))'
        
        this.conexao.query(sql, msg => {
            if(msg){
                console.log(msg)
            } else {
                console.log("tabela produtos criada com sucesso ou ja existe")
            }

        })
    }

    criarTabelaFuncionarios(){ // metodo é um funcao dentro de uma classe

        const sql = 'CREATE TABLE IF NOT EXISTS funcionarios (id int NOT NULL AUTO_INCREMENT, cpf int NOT NULL, telefone varchar(50), nome varchar(50) NOT NULL, cargo varchar(20), preco REAL, idade int NOT NULL, PRIMARY KEY(id))'
        
        this.conexao.query(sql, msg => {
            if(msg){
                console.log(msg)
            } else {
                console.log("tabela funcionarios criada com sucesso ou ja existe")
            }

        })
    }
}

module.exports = new Tabelas;