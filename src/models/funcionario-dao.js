class FuncionarioDao {
    constructor(conexao){
        this._conexao = conexao
    }

    lista(){
        return new Promise( (resolver, rejeitar) => {
            const sql = 'SELECT * FROM funcionarios'

            this._conexao.query(
                sql, 
                (msgErro, resultados) => {
                    if(msgErro){
                        return rejeitar('nao foi possivel listar os funcionarios')
                    } else {
                        return resolver(resultados)
                    }    
                }
            )
        });   
    }

    adiciona(funcionario){
        return new Promise( (resolver, rejeitar) => {
            const sql = `INSERT INTO Funcionarios(cpf,telefone,nome,cargo, idade) values (?,?,?,?)`

            this._conexao.query(sql,[funcionario.cpf,funcionario.telefone,funcionario.nome,funcionario.cargo, funcionario.idade],
                function(msgErro) {
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('nao foi possivel adicionar o funcionario');
                    } else {
                        resolver();
                    }
                })

        })
    }

    remover(id){
        console.log(`id do funcionario que quer remover ${id}`)

        return new Promise( (resolver, rejeitar) => {
            const sql = `DELETE FROM funcionarios WHERE id=?`

            this._conexao.query(sql,
                id,
                function(msgErro) {
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('nao foi possivel remover o funcionario');
                    } else {
                        resolver();
                    }
                })

        })
    }

    buscaPorId(id){
        return new Promise( (resolver, rejeitar) => {
            const sql = 'SELECT * FROM funcionarios WHERE id=?'
           
            this._conexao.query(sql,
                id,
                function(msgErro, resultados) {
                    const funcionario = resultados[0]
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('nao foi possivel buscar o funcionario');
                    } else {
                        resolver(funcionario);
                    }
                })

        })
    }

    altera(funcionario){
        return new Promise( (resolver, rejeitar) => {
            const id = funcionario.id;
            const sql = `UPDATE funcionarios SET ? WHERE id=?`

            this._conexao.query(sql,[funcionario,id],
                function(msgErro) {
                    if(msgErro){
                        console.log(msgErro)
                        return rejeitar('nao foi possivel alterar o funcionario');
                    } else {
                        return resolver();
                    }
                })

        })
    }



} 

module.exports = FuncionarioDao