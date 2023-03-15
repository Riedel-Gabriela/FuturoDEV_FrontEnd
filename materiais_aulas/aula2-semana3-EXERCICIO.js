//Crie uma arrow function que recebe o número de dias e 
//retorna se o número pertence a primeira 
//ou a segunda quinzena. Utilize o if ternário para praticar.

const verificaQuinzena = numeroDeDias => numeroDeDias <= 15 ? 'Primeira quinzena.' : 'Segunda quinzena.'
//console.log(verificaQuinzena(10))

//Crie uma arrow function que recebe um array de números 
//e retorne um array contendo apenas 
//números positivos

const verificaPositivo = lista => {
    let listaPositivos = []
    let listaNegativos = []
    lista.forEach((numero) => {
        numero >= 0 ? listaPositivos.push(numero) : listaNegativos.push(numero)
    });
    return listaPositivos
}

listaNumeros = [1, 4, 5, 89, 100, 0, -12, -25, 16, -589]
//console.log(verificaPositivo(listaNumeros))

//Escreva duas arrow functions que juntas 
//possam imprimir tabuada de 0 a 10

//DICAS:
//A primeira deve imprimir a tabuada de um número
//A segunda deve receber um número e uma função, e realizar repetições de 1 até o número informado
//Use a primeira função como callback da segunda

const imprimeTabuada = num => {
    let multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    multiplicadores.forEach(numero=> {
        console.log(`${numero} x ${num} = ${numero * num}`)
    });
}

imprimeTabuada(7)



