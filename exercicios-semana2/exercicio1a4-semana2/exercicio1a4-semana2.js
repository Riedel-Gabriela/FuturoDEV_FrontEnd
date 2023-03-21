// Baixe o arquivo imc.html e faça retornar no alerta da página, o IMC do usuário
// O cálculo deve ser feito se baseando nas variáveis que o usuário insere nos inputs
// https://drive.google.com/file/d/1kkoRP8v7QMmo7OvmC8V4jUFwC61U274W/view

// Dica: Capturar os document.getElementById e transformar em variáveis 

// Requisitos
// Ao preencher os campos e clicar no botão o alerta deve apresentar o IMC do usuário 
function IMC() {
    nome = document.getElementById("name").value;
    cidade = document.getElementById("city").value;
    idade = document.getElementById("age").value;
    altura = document.getElementById("height").value / 100;
    peso = document.getElementById("weight").value;
    let m = peso / (altura * altura);
    parseFloat(altura);
    parseFloat(peso);

        if (m < 16){
            var faixa = 'Magreza grave';
        } else if (m >= 16 && m < 17) {
            var faixa = 'Magreza moderada';
        } else if (m >= 17 && m < 18.5) {
            var faixa = 'Magreza leve';
        } else if (m >= 18.50 && m < 25) {
            var faixa = 'Saudável';
        } else if (m >= 25 && m < 30) {
            var faixa = 'Sobrepeso';
        } else if (m >= 30 && m < 35) {
            var faixa = 'Obesidade grau I';
        } else if (m >= 35 && m < 40) {
            var faixa = 'Obesidade grau II'; 
        } else if (m >= 40) {
            var faixa = 'Obesidade grau III';
        }
    lista.push({nome, idade, peso, altura, faixa});
    document.getElementById("submit").innerHTML = console.table(lista);
    console.log("Olá, meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + ", meço " + altura + "m, peso " + peso + "kg, meu IMC é de " + m + " e estou na faixa " + faixa + ".");
    }