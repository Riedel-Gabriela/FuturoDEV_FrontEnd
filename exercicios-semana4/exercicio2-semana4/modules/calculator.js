import {adicao, subtracao, multiplicacao, divisao, exponeciacao, modulo} from './operators/operators.js'

const calculadora = (a, b, operador) => {
    if(operador === '+') {
        return adicao(a, b)
    } else if(operador === '-') {
        console.log(subtracao(a, b)) 
    } else if(operador === '*') {
        return multiplicacao(a, b) 
    } else if(operador === '/') {
        return divisao(a, b)
    } else if(operador === '**') {
       return exponeciacao(a, b)
    } else if(operador === '%') {
        return modulo(a, b)
    } else {
        return "Não foi possível realizar a operação. Tente outra vez."
    }
}

export {calculadora}