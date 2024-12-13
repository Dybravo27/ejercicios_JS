// Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta

let contrasena = 'dylan2007';

const password = (contrasena)=>{
    while (true) {        
        let ingresar_contrasena = prompt('Ingrese la contraseña');
        if (contrasena === ingresar_contrasena) {
            alert('La contraseña ingresada SI coincide con la contraseña guardada');
            break;
        } else {
            alert('La contraseña ingresada NO coincide con la contraseña guardada');
        }
    }
}
password(contrasena);