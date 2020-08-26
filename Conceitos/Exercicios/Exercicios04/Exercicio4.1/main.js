const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, 
// no fim deve ser possível fazer o seguinte:

const {
    nome,
    endereco: {
        cidade,
        estado
    }
} = empresa;

console.log(nome); // Rocketseat<br>
console.log(cidade); // Rio do Sul<br>
console.log(estado); // SC<br>