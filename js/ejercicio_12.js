// Escribir un programa que calcule el área de un rectángulo
alert('A continuacion vas a ingresar los valores para hallar el area de un rectangulo');
let base = parseInt(prompt('Ingrese el valor de la base'));
let altura = parseInt(prompt('Ingrese el valor de la altura'));

const area = function(base,altura) {
    let operacion = base * altura;
    alert(`El area del rectangulo con base ${base} y altura ${altura} = ${operacion}`);
}
area(base,altura);