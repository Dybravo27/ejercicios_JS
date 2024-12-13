// En una determinada empresa, sus empleados son evaluados al final de cada año. Los
// puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando,
// traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados
// pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas.
// A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.

// a. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la
// puntuación del nivel.

// b. Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más

// Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento,
// así como la cantidad de dinero que recibirá el usuario.


let puntuacion = parseFloat(prompt('Ingrese su puntuación '));
let empleados = function(puntuacion) {
    if (puntuacion === 0.0 || puntuacion === 0.4 || puntuacion === 0.6) {
        if (puntuacion === 0.0) {
            dinero = puntuacion * 2400;
            pago = dinero + 2400;
            alert(`Su nivel de rendimiento es INACEPTABLE ${puntuacion}, por lo que su pago es ${pago}€`);
        }
        if (puntuacion === 0.4) {
            dinero = puntuacion * 2400;
            pago = dinero + 2400;
            alert(`Su nivel de rendimiento es ACEPTABLE ${puntuacion}, por lo que su pago es ${pago}€`);
        }
        if (puntuacion === 0.6) {
            dinero = puntuacion * 2400;
            pago = dinero + 2400;
            alert(`Su nivel de rendimiento es MERITORIO ${puntuacion}, por lo que su pago es ${pago}€`);
        }
    } else {
        alert('No se aceptan valores diferentes o intermedios');
    }
}
empleados(puntuacion);
