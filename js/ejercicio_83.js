// Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es válido y false si no es válido.

function validarPin(pin) {
    return (/^\d{4}$/.test(pin) || /^\d{6}$/.test(pin));
}

let pin1 = "1234";
let pin2 = "123456";
let pin3 = "123a";

console.log(validarPin(pin1));
console.log(validarPin(pin2));
console.log(validarPin(pin3));