"use strict";

var a = 1; // Não é possível fazer a alteração, pois a const não admite ter o valor reatribuido
//a = 3

var usuario = {
  nome: "Rychell"
}; // A linha abaixo executa sem problema pois não estamos reatribuindo a variável 'usuario', estamos apenas mutando uma de sua propriedades.

usuario.nome = "@rychellms";
var nome = "Rychell";

function imprimeNome() {
  console.log("// Escopo - Função imprimeNome");
  var nome = "@rychellms";
  console.log(nome);
}

imprimeNome();
console.log("// Escopo - Geral");
console.log(nome);
