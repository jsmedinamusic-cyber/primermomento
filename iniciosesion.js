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

   formLogin.onsubmit = function (enviar) {
enviar.preventDefault();
if (bloqueado) return;

const usuario = document.getElementById("loginUsuario").value;
const clave = document.getElementById("loginClave").value;

if (usuarios[usuario] === clave) {
    mensajeLogin.className = "ok";
    mensajeLogin.innerHTML = "¡Bienvenido, " + usuario + "!";
    intentos = 0;
} else {
      intentos++;
    if (intentos >= 3) {
    bloqueado = true;
    mensajeLogin.className = "error";
    mensajeLogin.innerHTML = "Cuenta bloqueada por 3 intentos fallidos.";
    formLogin.querySelector("button").disabled = true;
    } else {
    mensajeLogin.className = "error";
    mensajeLogin.innerHTML = "Datos incorrectos. Intento " + intentos + " de 3.";
    }
}
};
}