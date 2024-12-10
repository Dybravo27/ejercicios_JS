// Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.

function compararNumeros() {
    let valor1 = parseFloat(prompt('Ingrese el primer valor:'));
    let valor2 = parseFloat(prompt('Ingrese el segundo valor:'));
    let valor3 = parseFloat(prompt('Ingrese el tercer valor:'));

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) alert('Por favor ingrese tres valores válidos.');
    else {
        let mayor;
        if (valor1 > valor2 && valor1 > valor3) mayor = valor1;
        else if (valor2 > valor1 && valor2 > valor3) mayor = valor2;
        else mayor = valor3;

        let menor;
        if (valor1 < valor2 && valor1 < valor3) menor = valor1;
        else if (valor2 < valor1 && valor2 < valor3) menor = valor2;
        else menor = valor3;

        if (valor1 === valor2 && valor1 === valor3) alert("Todos los valores son iguales.");
        else if (valor1 === valor2) alert("El valor1 y valor2 son iguales.");
        else if (valor1 === valor3) alert("El valor1 y valor3 son iguales.");
        else if (valor2 === valor3) alert("El valor2 y valor3 son iguales.");
        alert(`El mayor valor es: ${mayor}`);
        alert(`El menor valor es: ${menor}`);
    }
}
compararNumeros();