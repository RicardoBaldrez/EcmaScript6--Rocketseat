"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var ageUsers = []; // usuarios.map(function(item) {
//     ageUsers.push(item.idade);
// });
// Utilizando arrow function

usuarios.map(function (item) {
  return ageUsers.push(item.idade);
});
console.log(ageUsers);
