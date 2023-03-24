/* FUNÇÕES
    - conversorReais: converte um número em um valor em reais, ou seja se ela receber 4 dever á converter para R$ 4,00
    - conversorCPF: crie um algoritmo que altere uma string para o formato de CPF
    - ordenadorArray: função que realiza a organização dos números dentro de um array */


//CONVERSOR REAIS

const conversorReais = numero => `R$${numero},00`


//CONVERSOR CPF

const conversorCPF = cpf => {
        //retira os caracteres indesejados:
        cpf = cpf.replace(/[^\d]/g, "");
        
        //realizar a formatação:
          return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

//ORDENADOR ARRAY

const ordenadorArray = lista => lista.sort()


export {conversorCPF, conversorReais, ordenadorArray} 