const usuarios = [
    { nome: "Diego", idade: 23, empresa: "Rocketseat" },
    { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

// const users = [];

// const findUser = usuarios.find(function (user) {
//     console.log(user);
//     if (user.empresa === "Google") {
//         users.push(user);
//     }
// });

// console.log(users);

const findUser = usuarios.find(user => user.empresa == 'Google');
console.log(findUser);