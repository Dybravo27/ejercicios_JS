// Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
// 2.3e-1, -3e2, 23, 3.2).
let numero = prompt('Ingrese el número a evaluar');
let regex = /^[-+]?\d*\.?\d+([eE][-+]?\d+)?$/;

if (regex.test(numero)) {
    alert("El número ingresado es un número en punto flotante válido.");
} else {
    alert("El número ingresado no es un número en punto flotante válido.");
}