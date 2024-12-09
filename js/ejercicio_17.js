// Escribir un programa que calcule el volumen de una esfera.

let radio = parseFloat(prompt('Ingrese el valor del radio'));

function volumen() {
    if (Number.isNaN(radio)) {
        alert('Error: no se puede dejar el campo vacio');
    } else {
        let formula = (4 * Math.PI * Math.pow(radio,3)) / 3;
        alert(`El volumen de la esfera con radio ${radio} = ${formula}`);
    }
}
volumen();