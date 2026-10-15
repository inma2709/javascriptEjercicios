// let a=7;
// let b="7";
// let c= a<3;
// console.log(c);

// c=a<b;
// console.log(c);

// let d;
// d= 7!=="7"; //esta evita las conversiones
// console.log(d);//true

// let e;

// e= a===b;
// console.log(e);//false
// //fin de los operadores de comparación estricta

// //comparadores logicos

// let puedePasar;
// let llave=true;
// let permiso=false;
// let jefe=true;

// //puedePasar true si tiene la llave o el permiso

// puedePasar= llave||permiso; //or alternativa
// console.log(puedePasar);


// puedePasar= (llave&&permiso)||jefe; 
// console.log(puedePasar);

// let estaLloviendo = false;
// let puedoSalirSinParaguas = !estaLloviendo;

// console.log(puedoSalirSinParaguas); 

//ejercicios

// let x=8>3;//true
// console.log(x);

// let y= 2<1;//false
// console.log(y);

// //Evalúa 5 >= 5 y 4 <= 3.
// let z = 5 >= 5;
// console.log(z);//true

// let w = 4 <= 3;
// console.log(w);//false

//Compara "10" == 10 y "10" === 10. Observa la diferencia.
let a="10";

let b= a + 5;
console.log(b);

let c= a===b;
console.log(c);

//Compara 7 != "7" y 7 !== "7". negacion de la igualdad
let d = 7 != "7";
console.log(d);//false

let e = 7 !== "7";
console.log(e);//true




let esFestivo = true;
let esDomingo = false;

let puedoDescansar = !esFestivo || esDomingo;
console.log(puedoDescansar);//false
