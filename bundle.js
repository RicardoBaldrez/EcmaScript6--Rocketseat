"use strict";

/**
 * Object Short Syntax -> Quando o nome da variável for o mesmo nome da propriedade do objeto, podemos utilizar a 'Sintaxe curta de Objeto'
 */
var nome = 'Ricardo';
var idade = 30; // Ao invés de atribuir dessa forma

var usuario1 = {
  nome: nome,
  idade: idade,
  empresa: 'Desempregados SA'
};
console.log(usuario1); // Utilizamos o 'Object Short Syntax'

var usuario2 = {
  nome: nome,
  idade: idade,
  empresa: 'Desempregados SA',
  Endereco: {
    rua: 'Forte do Calvário',
    cidade: 'São Paulo',
    uf: 'SP'
  }
};
console.log(usuario2);
