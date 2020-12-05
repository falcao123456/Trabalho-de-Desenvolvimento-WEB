let tabelaProdutos = document.querySelector("#produtos")

tabelaProdutos.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if(elementoClicado.dataset.type == 'remocao'){
        let produtoId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/produtos/${produtoId}`, {method: 'DELETE'})
            .then( resposta => {
                //funcao para remover linha da tabela
                let tr = elementoClicado.closest(`#produto_${produtoId}`)
                tr.remove()
            })
            .catch( msgErro => {
                console.log(msgErro)
            })

    }
})