/**
 * Object Short Syntax -> Quando o nome da variável for o mesmo nome da propriedade do objeto, podemos utilizar a 'Sintaxe curta de Objeto'
 */

const nome = 'Ricardo';
const idade = 30;

// Ao invés de atribuir dessa forma
const usuario1 = {
    nome: nome,
    idade: idade,
    empresa: 'Desempregados SA'
}

console.log(usuario1);

// Utilizamos o 'Object Short Syntax'
const usuario2 = {
    nome, 
    idade,
    empresa: 'Desempregados SA',
    Endereco: {
        rua: 'Forte do Calvário',
        cidade: 'São Paulo',
        uf: 'SP'
    }
}

console.log(usuario2);