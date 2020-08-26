"use strict";

// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// mostraInfo({ nome: "Diego", idade: 23 });
var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraInfo = function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

console.log(mostraInfo(usuario));
