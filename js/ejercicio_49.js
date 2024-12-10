// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo= lado * lado

function calcular_area_rectan() {
    let largo = parseFloat(prompt('Ingrese el largo del rectángulo:'));
    let ancho = parseFloat(prompt('Ingrese el ancho del rectángulo:'));

    if (isNaN(largo) || isNaN(ancho) || largo <= 0 || ancho <= 0) alert('Por favor ingrese valores positivos y válidos para los lados del rectángulo.');
    else {
        let area_rectangulo = largo * ancho;
        alert(`El área del rectángulo es: ${area_rectangulo.toFixed(2)}`);
    }
}
calcular_area_rectan();