//Ex 5 - Find
//Usando o array retornado após o filtro no exercício anterior

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

function listaMaiorIdade(lista) {
    return lista.idade >= 18
}
  
let maiorIdade = listaDePessoas.filter(listaMaiorIdade)

  //imprima o nome e sobrenome da primeira pessoa que possua idade maior que 30 anos.

function trintaAnos(lista) {
    return lista.idade > 30
}

let pessoaTrintaAnos = maiorIdade.find(trintaAnos)
console.log(`${pessoaTrintaAnos.nome} ${pessoaTrintaAnos.sobrenome}`)

//let pessoaDeTrinta = console.log(maiorIdade.find)
  


  