/*Todas as funções devem ser importadas utilizando o import dentro do index.js devem ser funcionais  e retornar o resultado esperado
Todas as funções devem ser exportadas utilizando o export
Lembre-se de instalar o pacote npm, e lá no package.json adicionar type: "module" */
import {conversorCPF, conversorReais, ordenadorArray} from './modules/util.js'

const lista = [1, 5, 6, 7, 2, 4]

console.log(conversorCPF('00000000000'))
console.log(conversorReais(600))
console.log(ordenadorArray(lista))
