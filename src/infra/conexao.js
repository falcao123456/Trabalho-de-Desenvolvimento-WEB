const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'cavalao',
    database: 'banco_projeto_web'
})

module.exports = conexao