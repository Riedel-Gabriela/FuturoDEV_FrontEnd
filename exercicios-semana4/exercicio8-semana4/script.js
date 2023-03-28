//Ex 8 - setTimeout()
//Crie um setTimeout dentro de uma função
//Utilize o seguinte array: const array = [3000, 5000, 10000]
//Faça com que o setTimeout utilize cada posição do Array como tempo de delay 
//O setTimeout deve consolar o seguinte
// executado em 3000ms 
// executado em 5000ms
// executado em 10000ms
//Cada console.log desse deve ser apresentado respeitando o tempo de delay de cada posição do array
//*Dica crie um valor como índice para acessar cada valor do array




const array = [3000, 5000, 10000]
function executando() {
    const element = document.getElementById("message")
    for(let i = 0; i < array.length; i++) {
        setTimeout(function() {
            element.innerHTML += `<p> executado em ${array[i]}ms </p>`
        }, array[i])
    }
}

executando()