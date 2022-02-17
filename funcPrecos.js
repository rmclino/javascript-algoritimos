// exporta recursos

exports.livroMaisCaro = function(livros) {
    let maisBarato =0;
    for (let atual = 0; atual < livros.length; atual++) {
        if (livros[atual].preco > livros[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return console.log(`O livro mais caro custa ${livros[maisBarato].preco} e o título é
 ${livros[maisBarato].titulo}.`)
}

exports.livroMaisBarato = function(livros) {
    let maisBarato =0;
    for (let atual = 0; atual < livros.length; atual++) {
        if (livros[atual].preco < livros[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o título é
 ${livros[maisBarato].titulo}.`)
}

 function menorValor(arrProdutos, posicaoInicial=0) {
    let maisBarato =posicaoInicial;
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato;
 }
module.exports.menorValor = menorValor;