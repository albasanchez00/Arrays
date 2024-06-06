//Variables -> nombre, utiliza un espacio de memoria para guardar un valor.

let alumno1 = "Juan Perez";
let alumno2 = "Marina Torres";

//....para estructura de datos -> se guardan en memoria como las variables.
//se utilizan los ARRAYS.



//Declaración de un Array
console.log("Declaración Array");
let alumnos = ["Juan Rodriguez", , "Marina Torres", "Dani Lopez", "Tania Triguero", "Sergio Castro"];
//Para agregar un
alumnos[5] = "Arantxa Gonzalez";
console.log(alumnos[3]);
console.log(alumnos);
//Remplzaar un valo rde una posición específica, con invocarlo se puede cambiar.
alumnos[5] = "Arantxa González García";
console.log(alumnos);


let profesores = new Array(); //declarando la estuctura de un Array sin valores

/* Actividad Resuelta 3.1 */
//Crear un Array con 5 localidades y mostrar solo las de posición impar
let localidades = ["Alcazar de San Juan", "Tomelloso", "Cinco Casas", "Mota del Cuervo", "Quintanar de la Orden", "Socuellamos",];
let indice = 0;
//Para conocer en JavaScript la longitud de un Array, utilizamos -> nombreArray.lngth.
console.log("*Array Localidades");
while (indice < localidades.length) {
    if (indice % 2 != 0) { //Si indice dividido(%) emtre 2 es diferente(!=) a 0, es impar. 
        console.log(localidades[indice]); // se muestra la localidad de 
    }
    indice++;
}


/* Recorrer Todo el Array Localidades */
console.log("*Array Todas Localidades");
for (let index = 0; index < localidades.length; index++) {
    console.log(`Localidad ${index + 1}-> ${localidades[index]}`);
}



/* Crear un Array Bidimensional -> Valores Random del 1 al 10 (Notas) */
//Crear 5 filas y 4 collumnas
console.log("*Array Bidimensional");
let arrayFC = new Array(5); //El 5 indica la longitud del Array que estamos definiendo.
for (let x = 0; x < 5; x++) { //Recorremos las filas
    arrayFC[x] = new Array(4); //En este punto se crean las columnas de la fila x
    for (let y = 0; y < 4; y++) { //Recorremos las columnas de esa fila
        arrayFC[x][y] = parseInt(Math.random() * 10); //Crea un valor aleatorio y lo asigna a la [fila] [columna].
    }
}
console.log(arrayFC); //Mostramos la tabla



/* Actividad Propuesta 3.2 */
//Creamos un cuadro (div) y un desplegable indicando los colores, y según la selección, va al Array con el índice y cambia el color....
console.log("*Actividad Propuesta 3.2 -> Cuadro Colores RGB");
let coloresRGB = ["#f39c12", "#C0F312", "#12F3E5", "#F312AF", "#F31212"];
let nombreRGB = ["Naranja", "Lima", "Turquesa", "Rosa", "Rojo"];

let colores = document.querySelector("#colores");
for (let i = 0; i < nombreRGB.length; i++) {
    let opcion = document.createElement("option"); //Creamos el option del select que tenemos en el documento HTML.
    //Le indicamos con textContent que muestra en el select por cada opción 
    opcion.textContent = nombreRGB[i];
    //Se le agrega atributos.
    opcion.setAttribute("value", i);
    colores.appendChild(opcion);
}

    let contenedor = document.querySelector(".container");
    //Escuchamos que el evento de cambio dentro del select para que cambie el color de fondo.
    colores.addEventListener("change",function(){
        contenedor.style.backgroundImage="none"; //Resetea el fondo
        contenedor.style.backgroundColor=coloresRGB[colores.value];
        //Si seleccionan la opción vacía el cuadro aparecerá vacío.
        if (colores.value=="") {
            contenedor.style.backgroundImage="url('../img/fondo.jpg')";
            contenedor.style.border="1px solid #000";
        }
    });
    




