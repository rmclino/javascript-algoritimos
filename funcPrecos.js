// exporta recursos

exports.livroMaisCaro = function(livros) {
    maisBarato =0;
    for (let atual = 0; atual < livros.length; atual++) {
        if (livros[atual].preco > livros[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return console.log(`O livro mais caro custa ${livros[maisBarato].preco} e o título é
 ${livros[maisBarato].titulo}.`)
}

exports.livroMaisBarato = function(livros) {
    maisBarato =0;
    for (let atual = 0; atual < livros.length; atual++) {
        if (livros[atual].preco < livros[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o título é
 ${livros[maisBarato].titulo}.`)
}