const array = ['java', 'javascript', 'python', 'html', 'css', 'inconstituição']
let tamanhoMaiorPalavra = 0;
let maiorPalavra = '';
let tamanhoMenorPalavra = 1000000000000;
let menorPalavra = '';

for(let i = 0; i < array.length; i++) {
    if(array[i].length > tamanhoMaiorPalavra) {
        tamanhoMaiorPalavra = array[i].length;
        maiorPalavra  = array[i]  
    } 
} console.log('A maior palavra é: ' + maiorPalavra)

for(let i = 0; i < array.length; i++) {
    if(array[i].length < tamanhoMenorPalavra) {
        tamanhoMenorPalavra = array[i].length;
        menorPalavra = array[i]  
    } 
} console.log('A menor palavra é: ' + menorPalavra)
