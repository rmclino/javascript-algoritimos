var livroMaisCaro = require('./funcPrecos.js').livroMaisCaro;
var livroMaisBarato = require('./funcPrecos.js').livroMaisBarato;

// Percorre um Array e guarda posição do livro mais barato
const livros = require('./listaLivros').precosLivro

// Chama Fun
//livroMaisBarato()
livroMaisCaro(livros);
livroMaisBarato(livros);
