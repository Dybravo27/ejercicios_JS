// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
// segundo, en caso contrario indicar con un mensaje que la operación no es posible
// realizarla.

let numero1 = parseFloat(prompt('Ingrese el primer número:'));
let numero2 = parseFloat(prompt('Ingrese el segundo número:'));

if (!isNaN(numero1) && !isNaN(numero2)) {
    if (numero1 > numero2) {
        let resultado = numero1 - numero2;
        alert(`El resultado de restar ${numero2} de ${numero1} es: ${resultado}`);
    } else {
        alert('La operación no es posible porque el primer numero no es mayor que el segundo.');
    }
} else {
    alert('Por favor, ingrese valores numericos válidos.');
}