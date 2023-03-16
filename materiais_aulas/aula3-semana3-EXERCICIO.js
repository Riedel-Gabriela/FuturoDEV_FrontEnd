//Crie uma arrow function que receba um array de números, 
//gere um novo array com cada um dos números 
//elevados ao quadrado e exiba o novo array no console.

const numeros = [2, 3, 5]
const aoQuadrado = lista => lista.map((numero) => numero * numero)
//console.log(aoQuadrado(numeros))

//Crie 2 arrow functions que ordenam um array de números
//1 ordena dos menores para os maiores
//1 ordena dos maiores para os menores

const sequencia = [1, 2, 3, 45, 67, 4, 5, 6]
const sequenciaCrescente = lista => lista.sort()
const sequenciaDecrescente = lista => lista.reverse()

sequenciaCrescente(sequencia)
sequenciaDecrescente(sequencia)