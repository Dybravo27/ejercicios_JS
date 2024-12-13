// Escribir un programa que calcule el área y el volumen de un cilindro.
alert('A continuacion se calculara el area y volumen de un cilindro');
let radio = parseFloat(prompt('Ingrese el valor del radio (r) :'));
let altura = parseFloat(prompt('Ingrese el valor de la altura (h) :'));

function area_volumen() {
    if (Number.isNaN(radio) && Number.isNaN(altura)) {
        alert('Error: no se aceptan campos vacios');
    } else {
        let area = 2 * Math.PI * radio * (radio + altura);
        let volumen = Math.PI  * Math.pow(radio,2) * altura;
        alert(`El area del cilindro con radio (${radio}) y altura (${altura}) es = ${area}\nEl volumen del cilindro con\nradio (${radio}) y altura (${altura}) es = ${volumen}`);
    }
}
area_volumen();