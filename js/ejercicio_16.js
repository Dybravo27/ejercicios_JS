// Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros/segundo

let distancia = parseFloat(prompt('Ingrese la distancia que recorre el proyectil en km :'));
let tiempo = parseFloat(prompt('Ingrese el tiempo que se demora en recorrer la distancia en minutos :'));

function proyectil() {
    if (Number.isNaN(distancia) && Number.isNaN(tiempo)) {
        alert('Error: no se pueden dejar los campos vacios');
    } else {
        let velocidad = (distancia * 1000) / (tiempo * 60);
        alert(`La velocidad del proyectil que va a ${distancia} km por ${tiempo} min es = ${velocidad} m/s`);
    }
}
proyectil();