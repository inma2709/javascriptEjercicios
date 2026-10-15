/*tres variables inciializadas*/

let pelicula;
let director;
let anyo;

/*asignamos valores a las variables*/
pelicula = "Coco";
director = "Lee Unkrich";
anyo = 2017;

// muestra la información de la película en la consola y en el documento HTML

console.log( "La película " + pelicula + " fue dirigida por " + director + " y se estrenó en " + anyo + ".");

// muestra la información de la película en el documento HTML con template literals

document.getElementById("informacion").textContent = (`La película ${pelicula} fue dirigida por ${director} y se estrenó en ${anyo}.`);

// muestra la información de la película en el documento HTML con concatenación de cadenas

document.getElementById("informacion").textContent=("La película " + pelicula + " fue dirigida por " + director + " y se estrenó en " + anyo + ".");












