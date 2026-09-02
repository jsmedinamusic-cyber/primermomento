const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";

let intentos = 0;
const maxIntentos = 3;
let sesionIniciada = false;

while (intentos < maxIntentos && sesionIniciada === false) {
   let usuario = prompt("Ingrese su usuario:");
   let contrasena = prompt("Ingrese su contraseña:");

   if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
      alert("Bienvenido " + usuario);
      sesionIniciada = true;
   } else {
      intentos = intentos + 1;
      let intentosRestantes = maxIntentos - intentos;

      if (intentosRestantes > 0) {
         alert("Usuario o contraseña incorrectos. Le quedan " + intentosRestantes + " intento(s).");
      } else {
         alert("Ha superado el número máximo de intentos. Saliendo...");
      }
   }
}