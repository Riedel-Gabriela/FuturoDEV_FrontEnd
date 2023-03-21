function parOuImpar(num) {
    if(num === 0) {
        console.log("O número zero é considerado PAR nesta função.")
    } else if(num < 0) {
        console.log("Não são aceitos números negativos.")
    } else if(num % 2 === 0) {
        console.log("O número " + num + " é PAR.")
    } else {
        console.log("O número " + num + " é IMPAR.")
    }
}
parOuImpar(/*Adicione um número INTEIRO*/)