const nome = "Diego";
const idade = 23;

const usuario = {
    nome: nome,
    idade: idade,
    cidade: "Rio do Sul",
};

// Adequando com Object Short Syntax
const usuario2 = {
    nome,
    idade,
    cidade: "Rio do Sul"
}

console.log(usuario);
console.log(usuario2);