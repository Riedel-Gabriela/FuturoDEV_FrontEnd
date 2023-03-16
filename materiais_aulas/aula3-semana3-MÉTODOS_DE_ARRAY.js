//MÉTODOS DE ARRAY
//Métodos esperam receber dentro deles uma FUNÇÃO.

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7]

//.filter() ---> retorna um array satisfazendo a condição.

let numerosParesFilter = listaDeNumeros.filter((numero) => numero % 2 === 0)
console.log(numerosParesFilter) //expected output: [ 2, 4, 6 ]

//.find() ---> retorna o primeiro valor da condição.

let numeroParesFind = listaDeNumeros.find((numero) => numero % 2 === 0)
console.log(numeroParesFind) //expected output: 2

//.map() ---> muda cada número segundo UMA condição.
let numeroMap = listaDeNumeros.map((numero) => numero * 2)
console.log(numeroMap) //expected output: [2, 4, 6, 8, 10, 12, 14]

//.concat() ---> junta dois arrays
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
console.log(array1.concat(array2)) //expected output: [ 1, 2, 3, 4, 5, 6 ]

//.test() ---> retorna um booleano True or False

//.includes() ---> passa um parâmetro e vê se contém no array, retorna True or False.

//.reduce() --->
const listaB = [10, 20, 30]
const somaDosNumeros = listaB.reduce((anterior, atual) =>{
    return anterior + atual
}, /*posso colocar aqui um terceiro parâmetro que define o início da soma -->*/ 0)
console.log(somaDosNumeros) //expected output: 60

//... ---> "REST": acessar o resto ou JUNTAR ítens.
const livro = {
    nome: "livro",
    preco: 10,
    ano: 2021
}
const {nome, ...rest} = livro //escrevi rest mas pode ser qualquer coisa, como "outrasInformações"
console.log(rest) //expected output { preco: 10, ano: 2023}

        //Posso usar o REST pra juntar itens:
function somar(...valores) {
    return valores.reduce((anterior, atual) => anterior + atual)
}
//Faz entender que é uma lista e portanto funcionam métodos de lista.
console.log(somar(1, 2, 3)) //expected output: 6

//... ---> "SPREAD" : ideia de espalhar
