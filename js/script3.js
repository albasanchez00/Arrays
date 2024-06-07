/* Para insertar */
//push -> para insertar al final

let equipos = ["Real Madrid", "FC Barcelona", "Girona", "Atletico Madrid", "Athletic Bilbao", "R.Sociedad", "Betis", "Villareal", "Valencia", "Alavés"]; //Nombre

equipos.push("Tomelloso");
console.log(equipos);

//Insertar al principio....
equipos.unshift("Tomelloso");



/* Crear multiplos de 5 del 0 al 100 */
for (let index = 0; index < 15; index++) {
    let numero=parseInt(Math.random()*21)*5;
    console.log(numero);
}


