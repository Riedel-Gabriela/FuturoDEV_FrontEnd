let numeroLados;
let medidaLado;
let poligono = '';

function poligonoDesc(numeroLados, medidaLado) {
    let area = (medidaLado * medidaLado) * numeroLados / 4 * Math.tan(Math.PI / numeroLados)
    if(numeroLados == 3) {
        poligono = 'triângulo'
        console.log("O polígono é um " + poligono + " e sua área é de " + Math.round(area) + "cm².")
    } else if (numeroLados == 4) {
        poligono = 'quadrado'
        console.log("O polígono é um " + poligono + " e sua área é de " + Math.round(area) + "cm².")
    } else if(numeroLados == 5) {
        poligono = 'pentágono'
        console.log("O polígono é um " + poligono + " e sua área é de " + Math.round(area) + "cm².")
    } else {
        console.log('Número de lados inávlido, tente novamente.')
    }
}

poligonoDesc(3, 3)
