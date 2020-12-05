"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// -----------------------------------
// Arrow functions
// -----------------------------------
var arr = [1, 2, 3]; // Função normal

var map = arr.map(function (item) {
  return item * 2;
}); // Arrow function

map = arr.map(function (item) {
  item * 2;
}); // Arrow function reduzida, pois há apenas um parametro

map = arr.map(function (item) {
  item * 2;
}); // Arrow function reduzida, pois há apenas uma instrução no corpo da função e esse é o valor a ser retornado

map = arr.map(function (item) {
  return item * 2;
}); // Arrow function reduzida, usasse o parenteses quando se quer retornar um objeto

map = arr.map(function (item) {
  return {
    valor: item * 2
  };
}); // -----------------------------------
// Valores padrão
// -----------------------------------

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
} // -----------------------------------
// Desestruturação
// -----------------------------------


var usuario = {
  nome: "rychell",
  idade: "27",
  endereco: {
    cidade: "Fortaleza",
    uf: "CE"
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    uf = usuario.endereco.uf;
console.log(nome, idade, uf); // -----------------------------------
// rest & spread
// -----------------------------------

var usuario2 = {
  nome: "rychell",
  idade: "27",
  empresa: "MaquiADORO",
  endereco: {
    cidade: "Fortaleza",
    uf: "CE"
  }
}; // ...rest

var nome2 = usuario2.nome2,
    resto = _objectWithoutProperties(usuario2, ["nome2"]);

console.log(resto); // ...spread

var usuario3 = _objectSpread(_objectSpread({}, usuario2), {}, {
  nome: "Rychell"
});

console.log(usuario3);
