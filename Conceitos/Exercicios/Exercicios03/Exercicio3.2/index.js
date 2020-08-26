"use strict";

var usuario = {
  nome: "Diego",
  idade: 23
}; // function mostraIdade(usuario) {
//     return usuario.idade;
// }
// mostraIdade(usuario);

var mostraIdade = function mostraIdade(param) {
  return "A idade do ".concat(usuario.nome, " \xE9: ").concat(param.idade);
};

console.log(mostraIdade(usuario));
