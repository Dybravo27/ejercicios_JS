// Crea una función de nos devuelva el elemento mayor de un arreglo de números.

function obtener_mayor(arreglo) {
    if (arreglo.length === 0) {
        return null;
    }
    
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}

// Ejemplo de uso
let numeros = [3, 7, 2, 5, 9, 1];
let mayor_elemento = obtener_mayor(numeros);
console.log("El mayor elemento del arreglo es: " + mayor_elemento);
