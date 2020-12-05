// 1º exercício
// Crie uma função que dado o objeto a seguir:
// var endereco = {
//     rua: "Rua dos pinheiros",
//     numero: 1293,
//     bairro: "Centro",
//     cidade: "São Paulo",
//     uf: "SP"
// }
// Retorne o seguinte conteúdo

// O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
// nº 1293.

function humanizaEndereco(endereco) {
  return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`;
}
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP",
};
console.log(humanizaEndereco(endereco));

// ==========================================================================
// 2º exercício
// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
  var inicioIntervalo = x <= y ? x : y;
  var fimIntervalor = y >= x ? y : x;
  var paresNoIntervalo = [];

  for (var i = inicioIntervalo; i <= fimIntervalor; i++) {
    i % 2 == 0 ? paresNoIntervalo.push(i) : null;
  }
  return paresNoIntervalo;
}
console.log(pares(32, 11));
// ==========================================================================
// 3º exercício
// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
// e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
  var skillDeInteresse = "Javascript";
  return skills.indexOf(skillDeInteresse) >= 0;
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));
// ==========================================================================
// 4º exercício
// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
  var nivel;
  if (anos >= 0 && anos < 1) {
    nivel = "Iniciante";
  } else if (anos >= 1 && anos < 3) {
    nivel = "Intermediário";
  } else if (anos >= 3 && anos < 6) {
    nivel = "Avançado";
  } else if (anos >= 7) {
    nivel = "Jedi Master";
  }
  return nivel;
}
var anosEstudo = 7;
console.log(experiencia(anosEstudo));
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

// ==========================================================================
// 5º exercício
// Dado o seguinte vetor de objetos:
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];
// Escreva uma função que produza o seguinte resultado:
// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
function renderizaHabilidadesUsuario(usuario){
    console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`)
}
for(usuario of usuarios) {
    renderizaHabilidadesUsuario(usuario)
}