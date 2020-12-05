const conexao = require('../../infra/conexao');
const ProdutoDao = require('../../models/produto-dao');
const FuncionarioDao = require('../../models/funcionario-dao');

//module.exports = function (app) { 
module.exports = (app) => {  // arrow function

    // enviando uma funcao de callback
    app.get('/',
        function (requisicao, resposta) {
            resposta.marko(require('../views/index.marko'))
        }
    );

    // PRODUTOS !!!

    app.get('/produtos',

        function (requisicao, resposta) {
            const produtoDao = new ProdutoDao(conexao)

            produtoDao.lista().then(resultados =>
                resposta.marko(
                    require('../views/produtos/lista/lista.marko'),
                    { produtos: resultados }
                )).catch(msgErro => console.log(msgErro))
        })

    app.get('/produtos/form', function (requisicao, resposta) {
        resposta.marko(require('../views/produtos/form/form.marko'), {funcinario: {} })
    })

    app.get('/produtos/form/:id', function (requisicao, resposta) {
        const id = requisicao.params.id;
        
        const produtoDao = new ProdutoDao(conexao);
        produtoDao.buscaPorId(id)
            .then(produto => 
                resposta.marko(require('../views/produtos/form/form.marko'),
                {produto: produto})
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

    // FUNCIONARIOS !!!
    app.get('/funcionarios',

        function (requisicao, resposta) {
            const funcionarioDao = new FuncionarioDao(conexao)

            funcionarioDao.lista().then(resultados =>
                resposta.marko(
                    require('../views/funcionarios/lista/lista.marko'),
                    { funcionarios: resultados }
                )).catch(msgErro => console.log(msgErro))
        })

    app.get('/funcionarios/form', function (requisicao, resposta) {
        resposta.marko(require('../views/funcionarios/form/form.marko'), {funcionario: {} })
    })

    app.get('/funcionarios/form/:id', function (requisicao, resposta) {
        const id = requisicao.params.id;
        
        const funcionarioDao = new FuncionarioDao(conexao);
        funcionarioDao.buscaPorId(id)
            .then(funcionario => 
                resposta.marko(require('../views/funcionarios/form/form.marko'),
                {funcionario: funcionario})
            )
            .catch(msgErro => console.log(msgErro))     
       
    })

    app.post('/funcionarios',function(req, resp){
        //console.log(req.body) //middleware, um software que fica no middle :)
          
        const funcionarioDao = new FuncionarioDao(conexao);
        funcionarioDao.adiciona(req.body).then(resp.redirect('/funcionarios')).catch(erro => console.log(erro))
    })

    app.put('/funcionarios',function(req, resp){
        //console.log(req.body) //middleware, um software que fica no middle :)
          
        const funcionarioDao = new FuncionarioDao(conexao);
        funcionarioDao.altera(req.body)
            .then(resp.redirect('/funcionarios'))
            .catch(erro => console.log(erro))
    })

    app.delete('/funcionarios/:id', (req, resp) => {
        const id = req.params.id;
        const funcionarioDao = new FuncionarioDao(conexao);
        funcionarioDao.remover(id)
            .then( () => resp.status(200).end())
            .catch( msgErro => console.log(msgErro))

    })

}


