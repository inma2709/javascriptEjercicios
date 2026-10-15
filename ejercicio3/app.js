let precio=25;
let cantidad=3;
let descuento=5;

// operador de suma
let suma= precio+precio;
console.log(suma);

//operador resta
let resta=suma-precio;
console.log(resta);

resta= precio-descuento;
console.log(resta); // resta ahora vale 20

// operador multiplicación
let multiplicacion= precio*cantidad;
console.log(multiplicacion); // multiplicacion ahora vale 75

//operador de división
 let division= precio/cantidad;
console.log(division); // division ahora vale 8.333333333333334

// operador de módulo
let modulo= precio%cantidad;
console.log(modulo); // resto de la división de precio entre cantidad

// iva

let iva= (precio * 21) / 100; // precio * 0,21
iva= precio * 0.21; 
console.log("el precio con iva es: " + iva); // iva ahora vale 5.25

let precioTotal= precio + iva;
console.log(precioTotal); // precioTotal ahora vale 30.25


//operadores de asignacion

let carrito=0;
carrito += 10; // carrito + 10 
carrito=carrito+10;
console.log(carrito); // carrito ahora vale 10

carrito -= 5; // carrito - 5
console.log(carrito); // carrito ahora vale 5

carrito= carrito-5;

console.log(carrito); // carrito ahora vale 0





