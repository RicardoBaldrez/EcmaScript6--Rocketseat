const usuarios = [
    { nome: "Diego", idade: 23, empresa: "Rocketseat" },
    { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" },
    { nome: "Lucas", idade: 50, empresa: "Rocketseat" }
];

// const professionals = [];

// usuarios.filter(function (item) {
//     if(item.idade >= 18 && item.empresa == "Rocketseat") {
//         professionals.push(item);
//     }
// });

// console.log(professionals);


// Arrow Functions
var users = usuarios.filter(user => user.idade >= 18 && user.empresa == 'Rocketseat');
console.log(users);