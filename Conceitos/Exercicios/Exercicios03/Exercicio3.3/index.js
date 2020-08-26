"use strict";

var nome = "Diego";
var idade = 23; // function mostraUsuario(nome = "Diego", idade = 18) {
//     return { nome, idade };
// }
// console.log(mostraUsuario(nome));
// console.log(mostraUsuario(nome, idade));

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome));
console.log(mostraUsuario(nome, idade));
