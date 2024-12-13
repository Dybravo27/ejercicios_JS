// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito

let contrasena = prompt('Ingrese una contraseña');
let regex = /^(?=[A-Za-z\d]{8,12}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

function fortale_contra() {
    if (regex.test(contrasena)) {
        alert('La contraseña es fuerte.');
    }
    else {
        alert('La contraseña no cumple con los requisitos de fortaleza.');
    }
}
fortale_contra();