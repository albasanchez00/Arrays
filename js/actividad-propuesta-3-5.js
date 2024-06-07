/* Actividad Propuesta 3.5 */
/* Enunciado. Se necesita crear una estructura que almacene 10 múltiplos de 5 aleatorios de 0 al 100. El primer elemento no puede ser menor de 50 y el último no puede ser mayor de 50 

    - Crear array con 100 elementos
    - Inicializarlo con multiplos de 5
    - Si el primero es < 50 se eliminará y cambiara por otro aleatorio
    - Si el último es > 50 se eliminará y cambiara por otro aleatorio
    - Mostrar el contenido por pantalla y comprobar si cumplen los requisitos.
*/

//Declaramos un Array vacío.
let arrayT = [];

//Generamos los numeros aleatorios entre 0 y 100, multiplos de 5
for (let i = 0; i < 10; i++) {
    let numAleatorio = parseInt(Math.random() * 21) * 5;
    //Si el numero es 0 0 100 se descarta
    while (numAleatorio === 0 || numAleatorio === 100) { 
        let numAleatorio = parseInt(Math.random() * 21) * 5;
    }
    arrayT.push(numAleatorio);
}

//Verificamos y ajustamos el primer parametro
if (arrayT[0] < 50) {
    let numAleatorio = parseInt(Math.random() * 10+1)* 5; //Nos permite generar múltiplos de 5 entre 5 y 50
    arrayT[0] = numAleatorio; //Remplazamos el primer elemento por el nuevo número
}

//Verificamos y ajustamos el último parametro
if (arrayT[9] > 50) {
    let numAleatorio = parseInt(Math.random() * 10+10) * 5; //Nos permite generar múltiplos de 5 entre 55 y 100
    arrayT[9] = numAleatorio; //Remplazamos el último elemento por el nuevo número
}

//Mostramos por consola
console.log(arrayT);





