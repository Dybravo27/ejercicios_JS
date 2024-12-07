// Escribir un programa que sume, resta, multiplique y divida dos números.

let eleccion = parseInt(prompt('Elija un numero para la operacion que desea realizar\n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division'));

const operaciones = function(eleccion) {
    if (eleccion >= 1 && eleccion <= 4) {
        let numero1 = parseInt(prompt('Ingrese el primer numero'));
        let numero2 = parseInt(prompt('Ingrese el segundo numero'));
        if (eleccion === 1) {
            let suma = numero1 + numero2 ;
            alert(`El resultado de la SUMA de ${numero1} y ${numero2} es : ${suma}`);
        }
        else if (eleccion === 2) {
            let resta = numero1 - numero2 ;
            alert(`El resultado de la RESTA de ${numero1} y ${numero2} es : ${resta}`);
        }
        else if (eleccion === 3) {
            let multiplicacion = numero1 * numero2 ;
            alert(`El resultado de la MULTIPLICACION de ${numero1} y ${numero2} es : ${multiplicacion}`);
        }
        else if (eleccion === 4) {
            let division = numero1 / numero2 ;
            alert(`El resultado de la DIVISION de ${numero1} y ${numero2} es : ${division}`);
        }
    }
    else {
        alert('Por favor ingrese un numero valido');
    }
}
operaciones(eleccion);