"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// A partir do objeto e utilizando o operador spread:
var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
}; // Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread(_objectSpread({}, usuario), {}, {
  endereco: _objectSpread(_objectSpread({}, usuario.endereco), {}, {
    cidade: 'Lontras'
  })
});

console.log(usuario);
console.log(usuario2);
console.log(usuario3);
