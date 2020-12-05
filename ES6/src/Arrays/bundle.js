"use strict";

var arr = [1, 2, 3, 4, 5, 6]; //Retorna um array com o mesmo comprimento do array original, porém com as modificações feitas dentro da função

var map = arr.map(function (item, index) {
  return item + index;
});
console.log(map); // Retorna um valor único obtido após operar todos os elementos do array inicial na função passada

var reduce = arr.reduce(function (acumulado, item) {
  return acumulado + item;
});
console.log(reduce); // Retorna uma array contendo apenas os elementos do array inicial que retornaram true na função passada como parametro

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // Retorna apenas o primeiro elemento do array orinigal que aplicado a função retorna true

var find = arr.find(function (item) {
  return item === 3;
});
console.log(find);
