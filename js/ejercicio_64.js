// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.

let numero = parseInt(prompt('Ingrese un numero'));

if (!isNaN(numero) && numero > 0) {
    let impares = '';
    for (let i = 0; i <= numero; i++) {
        if (i % 2 !== 0) {
            impares += i + ',';
        }
    }
    if (impares !== '') {
        alert(`Números impares desde 1 hasta ${numero}: ${impares}`);
    }
    else{
        alert('Estos numeros son pares');
    }
} else {
    alert('Error ingrese un numero entero positivo')
}