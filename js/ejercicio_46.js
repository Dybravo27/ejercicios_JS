// Calcule el mayor de tres números, permitiendo leer 3 valores diferentes

let num1 = parseFloat(prompt('Ingrese el primer número:'));
let num2 = parseFloat(prompt('Ingrese el segundo número:'));
let num3 = parseFloat(prompt('Ingrese el tercer número:'));

if (isNaN(num1) || isNaN(num2) || isNaN(num3))alert('Por favor ingrese tres números válidos.');
else {
    let mayor;
    if (num1 > num2 && num1 > num3) mayor = num1;
    else if (num2 > num1 && num2 > num3) mayor = num2;
    else mayor = num3;
    alert(`El mayor de los tres números es: ${mayor}`);
}