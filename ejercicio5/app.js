
/* ===================================
   1. DATOS DE LA COMPRA
=================================== */

const precioPantalon = 30;
const cantidadPantalones = 2;

const precioCamiseta = 15;
const cantidadCamisetas = 1;

// Calculamos el importe de los productos
const total = (precioPantalon * cantidadPantalones)
            + (precioCamiseta * cantidadCamisetas);

// Mostramos el resultado
console.log("Total de productos:", total);

document.getElementById("total").textContent = total;


/* ===================================
   2. GASTOS DE ENVÍO
=================================== */

const gastosEnvio = 5;

const totalConEnvio = total + gastosEnvio;

console.log("Total con envío:", totalConEnvio);

document.getElementById("totalConEnvio").textContent = totalConEnvio;


/* ===================================
   3. DESCUENTO GENERAL
=================================== */

// Descuento si supera los 100 €
// O si compra más de 3 artículos

const cantidadTotal = cantidadPantalones + cantidadCamisetas;

const descuento = total > 100 || cantidadTotal > 3;

console.log("¿Tiene descuento?", descuento);

document.getElementById("descuento").textContent = descuento;


/* ===================================
   4. DESCUENTO ADICIONAL
=================================== */

// Debe ser miembro del club Y comprar un viernes

const miembroClub = true;
const esViernes = true;

const descuentoAdicional = miembroClub && esViernes;

console.log("¿Tiene descuento adicional?", descuentoAdicional);

document.getElementById("descuentoAdicional").textContent = descuentoAdicional;

const envio = document.getElementById("envio");

let premium = true;
let bloqueoDireccion = false;

if ((premium || total >= 50) && !bloqueoDireccion) {
  envio.textContent = "¡Tu compra tiene envío gratuito!";
} else {
  envio.textContent = "Lo siento, tu envío no es gratis.";
}  
