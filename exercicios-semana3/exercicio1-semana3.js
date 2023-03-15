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

