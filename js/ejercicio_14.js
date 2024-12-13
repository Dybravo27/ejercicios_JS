// Escribir un programa que calcule el área de un triángulo.
alert('A continuacion se ingresa la base y la atura para hallar el area de un triangulo');
let base = parseFloat(prompt('Ingrese el valor de la base'));
let altura = parseFloat(prompt('Ingrese el valor de la altura'));

function area_triangulo() {
    if (Number.isNaN(base) && Number.isNaN(altura)) {
        alert('Error: no se puede dejar los campos vacios');
    } else {
        let operacion = (base * altura) / 2;
        alert(`El area del triangulo con base (${base}) y altura (${altura}) = ${operacion}`);
    }
}
area_triangulo();