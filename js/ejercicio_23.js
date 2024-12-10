// Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.

let distancia = parseFloat(prompt('Ingrese la velocidad del automovil en km/h:'));

function velocidad() {
    let formula = (distancia * 1000) / 3600;
    alert(`La velocidad del vehiculo es de ${formula.toFixed(2)} m/s`);
}
velocidad();