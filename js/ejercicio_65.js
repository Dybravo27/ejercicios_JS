// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.

let numero = parseInt(prompt('Ingrese un numero entero positivo'));
function cuenta_atras() {
    if (!isNaN(numero) && numero > 0) {
        let numeros = '';
        for (let i = numero; i > 0; i--) {
            numeros += i + ',';
        }
        alert(`Cuenta atras desde ${numero} = ${numeros}`)
    } else {
        alert('No se aceptan valores negativos');
    }
}
cuenta_atras();