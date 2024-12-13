// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

function suma_binarios() {
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
    let suma = num1 + num2;
    let binario = suma.toString(2);
    return binario;
}

let resul_binario = suma_binarios();
alert("La suma de los números en binario es: " + resul_binario);