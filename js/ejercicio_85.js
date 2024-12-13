// Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0

function sumarPositivos(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        if (numero > 0) {
            suma += numero;
        }
    }
    return suma;
}

let numeros = [3, -2, 5, -1, 0, 7];
let sumaPositivos = sumarPositivos(numeros);
console.log("La suma de los números positivos es: " + sumaPositivos);