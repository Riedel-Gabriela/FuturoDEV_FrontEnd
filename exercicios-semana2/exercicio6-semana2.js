let palavra1 = 'indefinidamente';
let palavra2 = 'inconstitucionalmente';
let palavra3 = 'pneumoultramicroscopicossilicovulcanoconiótico';
let palavraInversa1 = '';
let palavraInversa2 = '';
let palavraInversa3 = '';
for(let i = palavra1.length - 1; i >= 0; i--) {
    palavraInversa1 += palavra1[i];
} console.log(palavraInversa1);

for(let i = palavra2.length - 1; i >= 0; i--) {
    palavraInversa2 += palavra2[i];
} console.log(palavraInversa2);

for(let i = palavra3.length - 1; i >= 0; i--) {
    palavraInversa3 += palavra3[i];
} console.log(palavraInversa3);