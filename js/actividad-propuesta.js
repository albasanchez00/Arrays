/* Actividad Propuesta 3.4 */
//Crear una tabla de clasificaión de  una liga local de futbol con los siguientes datos:
/*
-Se disputan 10 partidos
-Por cada jugador neceseitas saber ->
    + Nombre
    + Puntos
    + Partidos jugados, ganados, empatados o perdidos
    + Goles a favor y en contra.
*/

let equipos = ["Real Madrid", "FC Barcelona", "Girona", "Atletico Madrid", "Athletic Bilbao", "R.Sociedad", "Betis", "Villareal", "Valencia", "Alavés"]; //Nombre
let datosEquipos = [
    [95, 29, 8, 1, 10, 5],
    [85, 38, 26, 7, 5, 3],
    [81, 38, 25, 6, 7, 5],
    [76, 38, 24, 4, 10, 2],
    [68, 38, 19, 11, 8, 4],
    [60, 38, 16, 12, 10, 3],
    [57, 38, 14, 15, 9, 7],
    [53, 38, 14, 11, 13, 7],
    [49, 38, 13, 10, 6, 1],
    [46, 38, 13, 10, 9, 4]
];  //Datos : PJ | PG | PE | PP | GF | GC


//Encontrar el equipo con más puntos
let equipoWin = 0;
for (let i = 0; i < datosEquipos.length; i++) {
    if (datosEquipos[i][0] > datosEquipos[equipoWin][0]) { //Se comparan los datos de la columna 0 que es la de los puntos de cada uno de los equipos y se almacenan los puntos más altos en la variable.
        equipoWin = i;
    }
}

//Una vez definido todo, lo mostrmos en una table al usuario.
let tabla = document.querySelector("table");
for (let index = 0; index < equipos.length; index++) {
    let fila = document.createElement("tr");
    fila.setAttribute("id", String("fila" + index));
    tabla.appendChild(fila);
    
    // Crear columna para el nombre del equipo
    let columnaNombre = document.createElement("td");
    columnaNombre.textContent = equipos[index];
    fila.appendChild(columnaNombre);

    // Crear columnas para los datos del equipo
    for (let c = 0; c < datosEquipos[index].length; c++) {
        let columna = document.createElement("td");
        columna.setAttribute("id", "columna" + index + "_" + c);
        columna.textContent = datosEquipos[index][c];
        fila.appendChild(columna);
    }
    console.log("El equipo ganador es: " + equipos[equipoWin]);
} 
// Mostrar el equipo ganador en el h2
let h2Ganador = document.getElementById("equipo-ganador");
h2Ganador.textContent = "El equipo ganador es: " + equipos[equipoWin];
