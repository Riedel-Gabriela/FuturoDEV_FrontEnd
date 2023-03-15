//Ex 3 - Arrow Functions + forEach
//Construa uma arrow function que recebe uma lista de frutas (exemplo: [‘maçã’, ‘laranja’]) 
//e retorna uma string com a lista de frutas separadas por vírgulas (exemplo: “Frutas: maçã, laranja”).
//Utilize o método .forEach()

const elementosDaLista = lista => {
    let resposta = "Frutas: "
    const ultimaPosicao = lista.length -1
    lista.forEach((item, posicao) => {
        if(posicao === ultimaPosicao) {
            resposta += `${item}. `
        } else {
            resposta += `${item}, `
        }
    });
    console.log(resposta)
}

listaFrutas = ['maçã', 'laranja', 'banana']
elementosDaLista(listaFrutas)

const elementosLista = lista => {
    let respostaString = 'Frutas: '
    const ultimoItem = lista.length -1
    lista.forEach((item, posicao) => {
        posicao === ultimoItem ? respostaString += `${item}. `: respostaString += `${item}, `
    })
    return respostaString
}

console.log(elementosLista(listaFrutas))


//sem forEach:
console.log(`Frutas: ${listaFrutas.join(', ')}.`)