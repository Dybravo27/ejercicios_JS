// Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos

let edad_madre = parseInt(prompt('Ingrese la edad de la Madre:')); 
let edad_hijo = parseInt(prompt('Ingrese la edad del hijo:'));
function calcular_edad_madre() {
    if (isNaN(edad_madre) || isNaN(edad_hijo) || edad_madre <= 0 || edad_hijo <= 0) {
        alert('Error: No se aceptan campos vacios o menores a 0');
    } else {
        let calcular_edad = edad_madre - edad_hijo ;
        alert(`La edad de la madre al momento de dar a luz a su hijo era de ${calcular_edad} años.`);
    }
}
calcular_edad_madre();