var livros = require('./listaLivros').precosLivro;
const menorValor = require('./funcPrecos').menorValor
console.log(livros);

for (let atual = 0; atual < livros.length-1; atual++) {
    let menor = menorValor(livros, atual);
    //console.log(`Menor indice = ${menor}`)
    let livroAtual = livros[atual];
    console.log(`Posicao Atual = ${atual} e livro atual é ${livroAtual.titulo}  de preco ${livroAtual.preco}`)
    
    let livroMenorPreco = livros[menor];
    console.log(`O livro de menor é ${livroMenorPreco.titulo} de preco ${livroMenorPreco.preco} na posica ${menor}`)
    
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);
