// Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.

function numero_mayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));

let mayor = numero_mayor(numero1, numero2);
alert("El mayor número es: " + mayor);