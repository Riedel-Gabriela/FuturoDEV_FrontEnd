//Ex 7 - setInterval()
//Crie uma função que utilize o temporizador setInterval() e o clearInterval() para criar um loop que exiba a mensagem: 

//“Este é um exemplo de contador, estamos no número:  x“.

//Onde:  X é o número atual no contador.

//Esta mensagem deverá aparecer no console um total de vinte vezes e a cada três segundos.
//O contador também deve aumentar um número a cada três segundos, então a cada repetição ele deverá aumentar + 1

function contador() {
    const element = document.getElementById("message");   
    let repeticao = 0;
    const id = setInterval(contagem, 3000);
    function contagem() {
      if (repeticao == 21) {
        clearInterval(id);
      } else {
        element.innerHTML += `<div>Este é um exemplo de contador, estamos no número: ${repeticao}</div>`;
        repeticao++; 
      }
    }
  }

  contador()
