// Escribir un programa que calcule el volumen de un elipsoide

let largo = parseFloat(prompt('Ingrese el valor del largo (a) :'));
let ancho = parseFloat(prompt('Ingrese el valor del ancho (b) :'));
let altura = parseFloat(prompt('Ingrese el valor de la altura (c) :'));

const volumen = function(largo,ancho,altura) {
    let formula =  (4 * Math.PI * largo * ancho * altura) / 3;
    alert(`Los valores ingresados:\nValor largo (a) = ${largo},\nValor ancho (b) = ${ancho},\nValor altura (a) = ${altura},\n El volumen del elipsoide es = ${formula}`);
}
volumen(largo,ancho,altura);