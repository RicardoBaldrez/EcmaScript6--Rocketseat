// A partir do objeto e utilizando o operador spread:
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario,  endereco: { ...usuario.endereco, cidade: 'Lontras' }}

console.log(usuario);
console.log(usuario2);
console.log(usuario3);