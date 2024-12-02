// Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
// menor de edad, el programa debe validar que solo se puedan ingresar números positivos.
let edad = parseInt(prompt('Ingrese su edad'))

function esMayor(edad) {
    if (edad >= 18) {
        alert('Es mayor de edad');
    } else if (edad <= 0){
        alert('El numero que ingreso no es positivo');
    } else{
        alert('Es menor de edad');
    }
}
let resultado = esMayor(edad);
console.log(resultado);
