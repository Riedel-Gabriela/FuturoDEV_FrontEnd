//MÉTODOS DE ARRAY
//Métodos esperam receber dentro deles uma FUNÇÃO.

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7]

//.filter() ---> retorna um array satisfazendo a condição.

let numerosParesFilter = listaDeNumeros.filter((numero) => numero % 2 === 0)
console.log(numerosParesFilter) //output expected: [ 2, 4, 6 ]

//.find() ---> retorna o primeiro valor da condição.

let numeroParesFind = listaDeNumeros.find((numero) => numero % 2 === 0)
console.log(numeroParesFind) //output expected: 2

//.map()

