const a = 1
// Não é possível fazer a alteração, pois a const não admite ter o valor reatribuido
//a = 3

const usuario = { nome: "Rychell"}

// A linha abaixo executa sem problema pois não estamos reatribuindo a variável 'usuario', estamos apenas mutando uma de sua propriedades.
usuario.nome = "@rychellms"


let nome = "Rychell"

function imprimeNome(){
    console.log("// Escopo - Função imprimeNome");
    let nome = "@rychellms"
    console.log(nome)
}

imprimeNome()
console.log("// Escopo - Geral");
console.log(nome)