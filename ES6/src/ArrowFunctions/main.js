// -----------------------------------
// Arrow functions
// -----------------------------------
const arr = [1, 2, 3]

// Função normal
let map = arr.map(function(item){
    return item * 2
})

// Arrow function
map = arr.map((item)=>{
    item * 2
})

// Arrow function reduzida, pois há apenas um parametro
map = arr.map(item => {
    item * 2
})

// Arrow function reduzida, pois há apenas uma instrução no corpo da função e esse é o valor a ser retornado
map = arr.map(item => item * 2)

// Arrow function reduzida, usasse o parenteses quando se quer retornar um objeto
map = arr.map(item => ({valor: item * 2}))

// -----------------------------------
// Valores padrão
// -----------------------------------
function soma(a=0, b=0){
    return a + b 
}

// -----------------------------------
// Desestruturação
// -----------------------------------
const usuario = {
    nome: "rychell",
    idade: "27",
    endereco: {
        cidade: "Fortaleza",
        uf: "CE"
    }
}

const { nome, idade, endereco:{ uf } }  = usuario
console.log(nome, idade, uf);

// -----------------------------------
// rest & spread
// -----------------------------------
const usuario2 = {
    nome: "rychell",
    idade: "27",
    empresa: "MaquiADORO",
    endereco: {
        cidade: "Fortaleza",
        uf: "CE"
    }
}
// ...rest
const { nome2, ...resto } = usuario2
console.log(resto);

// ...spread
const usuario3 = {...usuario2, nome: "Rychell"}
console.log(usuario3);
