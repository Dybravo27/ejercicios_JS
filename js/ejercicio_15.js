// Escribir un programa que calcule la longitud y el área de una circunferencia.
alert('A continuacion se ingresa el valor del radio para hallar la longitud y el area de una circunferencia');
let radio = parseFloat(prompt('Ingrese el valor del radio'));

const area_longitud = function(radio) {
    if (Number.isNaN(radio)) {
        alert('Error: no se puede dejar el campo vacio')
    } else {        
        let longitud = 2 * Math.PI * radio;
        let area = Math.PI * Math.pow(radio,2);
        alert(`La longitud de la circunferencia de radio ${radio} es = ${longitud}\nEl area de la circunferencia de radio ${radio} es = ${area}`);
    }
}
area_longitud(radio);