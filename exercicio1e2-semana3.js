//Ex 1 - Funções
//Crie uma função nomeada que recebe um array de elementos, 
//imprima cada um dos elementos e em seguida retorne a quantidade de elementos no array (seu tamanho).

function descreveLista(lista) {
    tamanho = lista.lenght
    for(elemento of lista) {
        console.log(elemento)
    }
    return tamanho
}

list = ['uma coisa', 'duas coisas', 'três coisas']
descreveLista(list)

//Ex 2 - Funções
//Crie uma função não nomeada que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares. 
//Em seguida imprima na tela uma string informando a quantidade de valores informados,
//a quantidade de ímpares e de pares: “A quantidade informada foi _____. A quantidade de valores pares foi ___ e a de valores ímpares foi __.”

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

list = [1, 2, 5, 567, 3, 92, -1]
contaParOuImpar(list)