// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.
let numero = parseInt(prompt('Ingrese el numero a evaluar'))
const esPrimo = function (numero) {
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }
    if (contador === 2) {
        alert("El numero ingresado es PRIMO");
    }else{
        alert("El numero que ingreso NO ES PRIMO");
    }
}
esPrimo(numero);