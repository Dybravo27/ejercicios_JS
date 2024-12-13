// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function num_texto(numero) {
    switch (numero) {
        case 0:
            return "cero";
        case 1:
            return "uno";
        case 2:
            return "dos";
        case 3:
            return "tres";
        case 4:
            return "cuatro";
        case 5:
            return "cinco";
        default:
            return "Número fuera de rango";
    }
}
let numero = parseInt(prompt("Introduce un número del 0 al 5:"));
let texto = num_texto(numero);
alert(`El número ${numero} en texto es: ${texto}`);