const usuario = { nome: "Diego", idade: 23 };

// function mostraIdade(usuario) {
//     return usuario.idade;
// }

// mostraIdade(usuario);



const mostraIdade = (param) => `A idade do ${usuario.nome} é: ${param.idade}`;

console.log(mostraIdade(usuario));