"use strict";

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; // Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, 
// no fim deve ser possível fazer o seguinte:

var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat<br>

console.log(cidade); // Rio do Sul<br>

console.log(estado); // SC<br>
