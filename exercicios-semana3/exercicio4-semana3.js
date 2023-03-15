/*Ex 4 - Filter
Observe o array abaixo:*/

const listaDePessoas = [
  { nome: "Rayane", sobrenome: "Cristina", idade: 21 },
  { nome: "Carlos", sobrenome: "Henrique", idade: 17 },
  { nome: "Julio", sobrenome: "Cesar", idade: 19 },
  { nome: "Camila", sobrenome: "Fernandes", idade: 18 },
  { nome: "Julia", sobrenome: "Fernandes", idade: 10 },
  { nome: "Bruno", sobrenome: "Albuquerque", idade: 31 },
  { nome: "Túlio", sobrenome: "Bastos", idade: 22 },
  { nome: "Cristiane", sobrenome: "Maria", idade: 41 },
];

/*Retorne os objetos que possuem a idade maior ou igual a 18 anos usando o .filter()*/


function listaMaiorIdade(lista) {
  return lista.idade >= 18
}

let maiorIdade = console.log(listaDePessoas.filter(listaMaiorIdade))

