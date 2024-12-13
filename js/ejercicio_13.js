// Escribir un programa que lea 4 números y calcule la media.

let nota1 = parseInt(prompt('Ingrese la primera nota'));
let nota2 = parseInt(prompt('Ingrese la Segunda nota'));
let nota3 = parseInt(prompt('Ingrese la Tercera nota'));
let nota4 = parseInt(prompt('Ingrese la Cuarta nota'));

function calcularMedia() {
    let media = (nota1 + nota2 + nota3 + nota4)/4;
    return alert(`De las notas ingresadas\nNota 1: ${nota1},\nNota 2: ${nota2},\nNota 3: ${nota3},\nNota 4: ${nota4},\nla media es = ${media}`);
}
calcularMedia();
