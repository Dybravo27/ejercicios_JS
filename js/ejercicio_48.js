// Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let figura = prompt('Para calcular el area escriba (T) para Triangulo o (C) para Circulo:').toUpperCase();
function calcular_area() {
    if (figura === 'T') {
        let base = parseFloat(prompt('Ingrese la base del triangulo:'));
        let altura = parseFloat(prompt('Ingrese la altura del triangulo:'));
    
        if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) alert('Por favor ingrese valores validos para la base y la altura.');
        else {
            let area_triangulo = (base * altura) / 2;
            alert(`El área del triángulo es: ${area_triangulo.toFixed(2)}`);
        }
    } else if (figura === 'C') {
        let radio = parseFloat(prompt('Ingrese el radio del círculo:'));
        if (isNaN(radio) || radio <= 0) alert('Por favor ingrese un valor valido para el radio.');
        else {
            let area_circulo = Math.PI * Math.pow(radio, 2);
            alert(`El area del circulo es: ${area_circulo.toFixed(2)}`);
        }
    } else {
        alert('Por favor ingrese una opción valida ((T) para Triangulo o (C) para Circulo).');
    }
}
calcular_area();