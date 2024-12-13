// Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.
function checkString() {
    const regex = /"([^"\\]|\\.)*"/;
    
    if (regex.test(cadena)) {
        alert("La cadena es valida y está entre comillas dobles.");
    } else {
        alert("La cadena no es valida o no está entre comillas dobles.");
    }
}

let cadena = prompt("Ingresa una cadena: ");
checkString();
