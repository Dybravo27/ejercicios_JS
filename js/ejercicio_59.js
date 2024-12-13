// En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.

let edad = parseInt(prompt('Ingrese la edad del postulante:'));
let estatura = parseFloat(prompt('Ingrese la estatura del postulante (en cm):'));
let peso = parseFloat(prompt('Ingrese el peso del postulante (en kg):'));

const postulantes = function(edad,estatura,peso) {
    if (!isNaN(edad) && !isNaN(estatura) && !isNaN(peso)) {
        if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
            alert('El postulante cumple con todos los requisitos para ser parte de la selección de baloncesto.');
        } else {
            alert('El postulante no cumple con los requisitos para ser parte de la selección de baloncesto.');
        }
    } else {
        alert('Error: ingrese valores válidos para edad, estatura y peso.');
    }
}
postulantes(edad,estatura,peso);