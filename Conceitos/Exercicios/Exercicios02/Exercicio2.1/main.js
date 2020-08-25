const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const ageUsers = [];

// usuarios.map(function(item) {
//     ageUsers.push(item.idade);
// });

// Utilizando arrow function
usuarios.map(item => ageUsers.push(item.idade));


console.log(ageUsers);