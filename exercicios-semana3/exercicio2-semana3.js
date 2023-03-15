//Ex 2 - Funções
//Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares. 
//Em seguida imprima na tela uma string informando a quantidade de valores informados,
//a quantidade de ímpares e de pares: “A quantidade informada foi _____. A quantidade de valores pares foi ___ e a de valores ímpares foi __.”
 
list = [1, 2, 5, 567, 3, 92, -1]
//Aqui está uma função NÃO nomeada (ANÔNIMA)
const parOuImpar = function(lista) {
    let qtdeImpar = 0
    let qtdePar = 0
    tamanho = lista.length
    for(elemento of lista) {
        if(elemento % 2 == 0) {
            qtdePar += 1
        } else {
            qtdeImpar += 1
        } 
    }
    const resultado = {qtdePar, qtdeImpar}
    console.log(`A quantidade informada foi ${tamanho}. A quantidade de valores pares foi ${qtdePar} e a de valores ímpares foi ${qtdeImpar}.`)
    return(resultado)
 }
 parOuImpar(list)


//abaixo tem uma função NOMEADA.
function contaParOuImpar(array) {
    let qtdeImpar = 0
    let qtdePar = 0
    tamanho = array.length
    for(elemento of array) {
        if(elemento % 2 == 0) {
            qtdePar += 1
        } else {
            qtdeImpar += 1
        } 
    } 
    console.log('A quantidade informada foi ' + tamanho + '. A quantidade de valores pares foi ' + qtdePar + ' e a de valores ímpares foi ' + qtdeImpar + '.')
    return(qtdePar,qtdeImpar)
} 
contaParOuImpar(list)