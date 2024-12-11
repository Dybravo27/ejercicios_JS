// Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
// años que ha cumplido (desde 1 hasta su edad).

let edad = parseInt(prompt('Ingrese su edad:'));

if (!isNaN(edad) && edad > 0) {
    for (let i = 1; i <= edad; i++) {
        alert(`Has cumplido ${i} años`);
    }
} else {
    alert('Error ingrese una edad valida');
}