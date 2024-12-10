// Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos

let nota1 = parseInt(prompt(`Ingrese la calificacion del examen 1 :`));
let nota2 = parseInt(prompt(`Ingrese la calificacion del examen 2 :`));
let nota3 = parseInt(prompt(`Ingrese la calificacion del examen 3 :`));
let nota4 = parseInt(prompt(`Ingrese la calificacion del examen 4 :`));
function calificaciones() {
    if (nota1 > 1 && nota1 < 5 && nota2 > 1 && nota2 < 5 && nota3 > 1 && nota3 < 5 && nota4 > 1 && nota4 > 5) {
        let prom_califica = (nota1 + nota2 + nota3 + nota4) / 4;
        alert(`El promedio de las calificaciones es: ${prom_califica.toFixed(2)}`);
    } else {
        alert('No se acepta una nota menor a 1 o mayor a 5');
    }
}
calificaciones();