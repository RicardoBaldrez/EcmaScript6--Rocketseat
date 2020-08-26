// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
// }

// mostraInfo({ nome: "Diego", idade: 23 });

const usuario = {
    nome: 'Diego',
    idade: 23
}

const mostraInfo = ({nome, idade}) => `${nome} tem ${idade} anos.`;

console.log(mostraInfo(usuario));