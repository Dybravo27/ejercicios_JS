// Determinar si un número es positivo y menor que 100.
let numero = parseFloat(prompt('Ingrese un número:'));
function determinar_positivo_menor(params) {
    if (isNaN(numero)) {
        alert('Por favor ingrese un número válido.');
    } else if (numero > 0 && numero < 100) {
        alert(`El número ${numero} es positivo y menor que 100.`);
    } else {
        alert(`El número ${numero} no cumple con las condiciones: no es positivo o no es menor que 100.`);
    }
}
determinar_positivo_menor();