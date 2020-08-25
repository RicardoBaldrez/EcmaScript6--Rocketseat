const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// const users = [];

// const user = usuarios.map(function (user) {
    
//     user.idade *= 2;
//     users.push(user);
// });

// console.log(users);

// const userAgeSm = users.filter(user => user.idade < 50);
// console.log(userAgeSm);

const calculo = usuarios.map(user => ({...user, idade : user.idade * 2})).filter(user => user.idade <= 50)
console.log(calculo);