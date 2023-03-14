//Conversor de moeda:

function converteDolarEmReal(dolar, cotacaoDolar, tipoCliente) {
    const valorDoDolarParaEsteCliente = calculaValorDolarPorTipoCliente(cotacaoDolar,tipoCliente)
    console.log(dolar * cotacaoDolar)
}

//Quero cotar o dolar conforme o tipo de cliente: Lembre-se de distribuir responsabilidades!

function calculaValorDolarPorTipoCliente (cotacaoDolar, tipoCliente) {
    if(tipoCliente === 'premium') {
        return cotacaoDolar -0,10
    } else if(tipoCliente === 'antigo') {
        return cotacaoDolar - 0,30
    } else {
        return cotacaoDolar
    }
}

//Transforme os dados a seguir em funções:


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

verificaArray(list)