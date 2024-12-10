// Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que
// muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable
// temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra
// Normal.

function verificar_condicion() {
    let temperatura = parseFloat(prompt('Ingrese la temperatura:'));
    let presion = parseFloat(prompt('Ingrese la presion:'));

    if (isNaN(temperatura) || isNaN(presion)) alert('Por favor ingrese valores validos para temperatura y presion.');
    else {
        if (presion > 200 || temperatura > 100) {
            alert('Alarma');
        } else {
            alert('Normal');
        }
    }
}
verificar_condicion();