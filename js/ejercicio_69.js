// Escribir un programa que pida al usuario un número entero y muestre por consola un
// triángulo rectángulo como el de más abajo.

let numero = parseInt(prompt('Ingrese un numero entero'));
if (!isNaN(numero) && numero > 0) {
    let resultados = [ ];
    for (let i = 1; i <= numero; i++) {
        resultados.push('*'.repeat(i));
    }
    console.log(resultados.join('\n'));
} else {
    alert('Error ingrese datos validos');
}