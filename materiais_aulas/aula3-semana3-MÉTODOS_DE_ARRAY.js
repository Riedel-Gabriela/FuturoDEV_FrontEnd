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
const listaDeNumeros2 = [1, 2, 4, 5, 6]
const listaDeNumeros3 = [5, 7]
    //posso concatenar arrays:
const novaListaDeNumeros = [...listaDeNumeros2, ...listaDeNumeros3]
console.log(novaListaDeNumeros) //output: [1, 2, 4, 5, 6, 5, 7]
    //adicionar um elemento no início de um array:
const listaDeNumeros4 = [1, ...listaDeNumeros2]
console.log(listaDeNumeros4) //output: [1, 1, 2, 4, 5, 6]
    //adicionar um elemento no final do array:
const listaDeNumeros5 = [...listaDeNumeros3, 1]
console.log(listaDeNumeros5) //output: [ 5, 7, 1 ]
    //concatenar objetos:
const objeto1 = { nome: "João", idade: 20}
const objeto2 = { sobrenome: "Silva", altura: 1.8}

const objeto3 = { ...objeto1, ...objeto2 }
console.log(objeto3) //output: { nome: 'João', idade: 20, sobrenome: 'Silva', altura: 1.8 }
    //adicionar propriedades ao objeto:
const objeto4 = { ...objeto3, sexo: "Masculino" }
console.log(objeto4) //output: {nome: 'João', idade: 20, sobrenome: 'Silva', altura: 1.8, sexo: 'Masculino'}
    //alterar um objeto
const objeto5 = { ...objeto2, altura: 1.9}
console.log(objeto5) //output: { sobrenome: 'Silva', altura: 1.9 }

//PARÂMETRO DE FUNÇÃO:
//Uma função que recebe uma lista de números e multiplica cada um deles pelo primeiro número da lista. 
//Em seguida vai somar cada número.
const listaDeNumeros6 = [3, 7, 8, 2]
function multiplicaESomaNumeros([primeiro, ...resto]) { //quando multiplica, tem que ser a lista inteira que é [primeiro, ...resto]
    const novaListaMultiplicada = [primeiro, ...resto].map(numero => numero * primeiro) //map n muda quantidade mas muda o elemento
    console.log(novaListaMultiplicada)
    const somaFinal = novaListaMultiplicada.reduce((anterior, atual) => anterior + atual) //para somar, uso reduce.
    console.log(somaFinal)
}
multiplicaESomaNumeros(listaDeNumeros6)

//Construa um objeto “livro” que recebe as propriedades nome e autor, com valores a sua escolha.
//Em seguida, crie um novo objeto “livro completo”, adicionando a propriedade ano e seu valor, através do operador spread.
const livroExercicio = {
    nome: "The Clean Code",
    autor: "Robert Cecil Martin"
}

const livroExercicioCompleto = {
    ...livroExercicio,
    ano: 2011
}
console.log(livroExercicioCompleto)
