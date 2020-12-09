class ProdutoDao {
    constructor(conexao){
        this._conexao = conexao
    }

    lista(){
        return new Promise( (resolver, rejeitar) => {
            const sql = 'SELECT * FROM produtos'

            this._conexao.query(
                sql, 
                (msgErro, resultados) => {
                    if(msgErro){
                        return rejeitar('nao foi possivel listar os produtos')
                    } else {
                        return resolver(resultados)
                    }    
                }
            )
        });   
    }

    adiciona(produto){
        return new Promise( (resolver, rejeitar) => {
            const sql = `INSERT INTO PRODUTOS(nome,laboratorio,preco,descricao, numeroProduto, quantidade) values (?,?,?,?)`

            this._conexao.query(sql,[produto.nome,produto.laboratorio,produto.preco,produto.descricao, produto.numeroProduto, produto.quantidade],
                function(msgErro) {
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('nao foi possivel adicionar o produto');
                    } else {
                        resolver();
                    }
                })

        })
    }

    remover(id){
        console.log(`id do produto que quer remover ${id}`)

        return new Promise( (resolver, rejeitar) => {
            const sql = `DELETE FROM produtos WHERE id=?`

            this._conexao.query(sql,
                id,
                function(msgErro) {
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('nao foi possivel remover o produto');
                    } else {
                        resolver();
                    }
                })

        })
    }

    buscaPorId(id){
        return new Promise( (resolver, rejeitar) => {
            const sql = 'SELECT * FROM produtos WHERE id=?'
           
            this._conexao.query(sql,
                id,
                function(msgErro, resultados) {
                    const produto = resultados[0]
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('nao foi possivel buscar o produto');
                    } else {
                        resolver(produto);
                    }
                })

        })
    }

    altera(produto){
        return new Promise( (resolver, rejeitar) => {
            const id = produto.id;
            const sql = `UPDATE produtos SET ? WHERE id=?`

            this._conexao.query(sql,[produto,id],
                function(msgErro) {
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('nao foi possivel alterar o produto');
                    } else {
                        return resolver();
                    }
                })

        })
    }



} 

module.exports = ProdutoDao