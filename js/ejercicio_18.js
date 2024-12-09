// Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

let a =parseInt(prompt('Ingrese el valor de a : '));
let b =parseInt(prompt('Ingrese el valor de b : '));
let c =parseInt(prompt('Ingrese el valor de c : '));

function expresion() {
    if (Number.isNaN(a) && Number.isNaN(b) && Number.isNaN(c)) {
        alert('Error: no se pueden dejar campos vacios');
    } else {
        let formula = (a + 7 * c) / (b + 2 - a) + 2* b;
        alert(`Los valores ingresados\nValor a = ${a},\nValor b = ${b},\nValor c = ${c},\nEl resultado de la expresion es = ${formula}`);
    }
}
expresion();