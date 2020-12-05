const conexao = require('../../infra/conexao');
const ProdutoDao = require('../../models/produto-dao');

//module.exports = function (app) { 
module.exports = (app) => {  // arrow function

    // enviando uma funcao de callback
    app.get('/',
        function (requisicao, resposta) {
            resposta.marko(require('../views/index.marko'))
        }
    );

    app.get('/produtos',

        function (requisicao, resposta) {
            const produtoDao = new ProdutoDao(conexao)

            produtoDao.lista().then(resultados =>
                resposta.marko(
                    require('../views/produtos/lista/lista.marko'),
                    { livros: resultados }
                )).catch(msgErro => console.log(msgErro))
        })

    app.get('/produtos/form', function (requisicao, resposta) {
        resposta.marko(require('../views/produtos/form/form.marko'), {livro: {} })
    })

    app.get('/produtos/form/:id', function (requisicao, resposta) {
        const id = requisicao.params.id;
        
        const produtoDao = new ProdutoDao(conexao);
        produtoDao.buscaPorId(id)
            .then(livro => 
                resposta.marko(require('../views/produtos/form/form.marko'),
                {livro: livro})
            )
            .catch(msgErro => console.log(msgErro))     
       
    })

    app.post('/produtos',function(req, resp){
        //console.log(req.body) //middleware, um software que fica no middle :)
          
        const produtoDao = new ProdutoDao(conexao);
        produtoDao.adiciona(req.body).then(resp.redirect('/produtos')).catch(erro => console.log(erro))
    })

    app.put('/produtos',function(req, resp){
        //console.log(req.body) //middleware, um software que fica no middle :)
          
        const produtoDao = new ProdutoDao(conexao);
        produtoDao.altera(req.body)
            .then(resp.redirect('/produtos'))
            .catch(erro => console.log(erro))
    })

    app.delete('/produtos/:id', (req, resp) => {
        const id = req.params.id;
        const produtoDao = new ProdutoDao(conexao);
        produtoDao.remover(id)
            .then( () => resp.status(200).end())
            .catch( msgErro => console.log(msgErro))

    })

}


