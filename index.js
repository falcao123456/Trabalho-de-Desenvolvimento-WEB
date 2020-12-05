const app = require('./src/config/custom-express');
const conexao = require('./src/infra/conexao');
const Tabelas = require('./src/infra/tabelas');


conexao.connect(msg => {
    if (msg) {
        console.log(msg)
    } else {
        console.log("conectado com sucesso")
        Tabelas.inicializa(conexao)
        //enviando uma funcao para ser usada quando um evento acontecer
        //callback
        app.listen(3000, // servidor esperar conexoes na porta 3000
            function () {
                console.log("Servidor rodando na porta 3000!!!!!!");
            }
        );
    }

})