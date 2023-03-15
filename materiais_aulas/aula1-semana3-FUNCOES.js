//Transforme os dados a seguir em funções:

//Exemplo de função NOMEADA.
function somarDoisNumeros(num1, num2) {
   console.log(num1 + num2)
}

//somarDoisNumeros(1, 2)
//somarDoisNumeros(3, 4)

//Crie uma função nomeada que 
//recebe um array de elementos, 
//imprima cada um dos elementos e 
//em seguida retorne a quantidade 
//de elementos no array (seu tamanho).

let list = ['uma coisa', 'duas coisas', 'três coisas', 'quatro coisas']

function verificaArray(array) {
    tamanho = array.length
    for (elemento of array) {
        console.log(elemento)
    }
    return tamanho
}

//verificaArray(list)

//for...of é ideal usar quando não precisamos do índice.
//para obter o índice, indica-se usar o forEach

nomeDaLista.forEach(function(elemento, posicao) { //passando uma função não nomeada podendo receber 2 parâmetros (elemento e posição)
    console.log(posicao + ":  " + elemento)
});

//Todo método de array tem a mesma escrita
//array.método(função(elemento, índice){
//})

//Uma função nomeada você chama onde você quiser, diferente das funções a seguir.
//Função anônima comum
const subtrai = function(num1, num2) {
    return num1 - num2
}

//Arrow Functions =>
const subtrair = (num1, num2) => {
    return num1 - num2
}

//Pode ser também:
const subtrair2 = (num1, num2) => num1 - num2

//Somente com UM parâmetro
const tornarQuadrado = num => num * num

//verifica par ou impar com if ternário e arrow function
const verificaParOuImpar = (numero) => numero % 2 === 0 ? 'par' : 'ímpar'

//Crie uma arrow function que recebe o número de dias e 
//retorna se o número pertence a primeira 
//ou a segunda quinzena. Utilize o if ternário para praticar.

const verificaQuinzena = numeroDeDias => numeroDeDias <= 15 ? 'Primeira quinzena.' : 'Segunda quinzena.'
console.log(verificaQuinzena(25))

//maior palavra:
function LongestWord(sen) { 

    // we use the regex match function which searches the string for the
    // pattern and returns an array of strings it finds
    // in our case the pattern we define below returns words with
    // only the characters a through z and 0 through 9, stripping away punctuation
    // e.g. "hello$% ##all" becomes [hello, all]
    let arr = sen.match(/[a-z]+/gi);
  
    // the array sort function takes a function as a parameter
    // which is used to compare each element in the array to the
    // next element in the array
    let sorted = arr.sort(function(a, b) {
      return b.length - a.length;
    });
  
    // this array now contains all the words in the original
    // string but in order from longest to shortest length
    // so we simply return the first element
    return sorted[0];
           
  } 
  // keep this function call here 
  console.log(LongestWord(readline()));