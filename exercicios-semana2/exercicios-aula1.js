//ex1 tamanho da palavra:

let palavra = "piperidinoetoxicarbometoxibenzofenona";
console.log(palavra.length)

//ex2 posição 13 na palavra anterior
let palavra1 = "piperidinoetoxicarbometoxibenzofenona";
console.log(palavra1[12])

//ex3 substituir nomeusuario pelo nome
let nome = "Luis";
let saudacao = "Olá meu nome é nomeusuario, e eu gosto de hobbie1 e hobbie2."
console.log(saudacao.replace("nomeusuario", nome))

//ex4 fazer concatenação com a mesma frase anterior e duas variaveis
let sobrenome = "Silva"
console.log(saudacao.replace("nomeusuario", nome + " " + sobrenome))

//ex5 Retire os espaços em branco da seguinte frase: “  9 entre 10 dentistas recomendam escovar os dentes   “
let frase = "  9 entre 10 dentistas recomendam escovar os dentes   ";
console.log(frase.trim())

//ex6 Transforme o seguinte texto em número, “652,29”, e traga o valor inteiro (“sem a vírgula”) em formato de número
let numeroEmTexto = "652,28"
console.log(parseInt(numeroEmTexto))

//ex7 Transforme o seguinte texto em número, “652,29”, e traga o com os mesmos números depois da virgula, em formato de número
let numeroEmTexto2 = "652,28"
let numeroFloat = parseFloat(numeroEmTexto2.replace(",", "."))
console.log(numeroFloat)

//ex8 Pegue o número “56,312902139” e traga apenas os três primeiros números depois da vírgula em formato numérico
let numeroEnorme = "56,312902139"
let numerosVirgula = numeroEnorme[3] + numeroEnorme[4] + numeroEnorme[5]
console.log(parseInt(numerosVirgula))