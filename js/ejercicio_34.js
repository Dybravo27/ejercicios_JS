// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.

let caudal = parseFloat(prompt('Ingrese el caudal (Q) en litros por segundo:'));
let radio = parseFloat(prompt('Ingrese el radio (r) del depósito en metros:'));
let altura = parseFloat(prompt('Ingrese la altura (H) del depósito en metros:'));

if (isNaN(caudal) || isNaN(radio) || isNaN(altura) || caudal <= 0 || radio <= 0 || altura <= 0) {
    alert('Ingrese valores válidos (mayores que cero) para todos los campos.');
} else {
    let volumen = Math.PI * Math.pow(radio, 2) * altura;
    let calcu_tiempo = volumen / caudal;
    let tiempo_minutos = calcu_tiempo * 60;
    alert(`El tiempo estimado para llenar el depósito es de ${calcu_tiempo.toFixed(2)} segundos (${tiempo_minutos.toFixed(2)} minutos).`);
}

