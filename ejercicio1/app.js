
let apellidos; // Variable para almacenar los apellidos del usuario sin datos iniciales
let nombre = "Inma";// declaramos la variable y la inicializamos con un valor
let ciudad= "Sevilla";
let edad = "30";

// creamos un saludo concatenando las variables nombre, ciudad y edad
let saludo= "Hola, mi nombre es " + nombre + " y vivo en " + ciudad + ". Tengo " + edad + " años.";

console.log(saludo); // Mostramos el valor de la variable saludo en la consola
// Pedimos al usuario que introduzca sus datos mediante prompt y actualizamos las variables correspondientes
nombre=prompt("Introduce tu nombre: ");
ciudad=prompt("Introduce tu ciudad: ");
edad=prompt("Introduce tu edad: ");
saludo = `Hola mi nombre es ${nombre} y vivo en ${ciudad}. Tengo ${edad} años.`; 
console.log(saludo); // Mostramos el valor de la variable saludo en la consola

/* Mostramos el saludo en el elemento de html con id "hola" */
document.getElementById("hola").textContent = saludo;






