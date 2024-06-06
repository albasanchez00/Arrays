/* Actividad Propuesta 3.3 */
//Enunciado. Números pares aleatorios de 1 a 1000, utilizando el reocrrido For-In.

//Declaramos el Array.
let array=new Array(100);

//Para crear el array, utilizamos el for-i.
for (let i = 0; i < array.length; i++) {
    array[i]=parseInt(Math.random()*1000+1);
}

//Para mostrar el Array y valor si es par, utilizamos for-in.
for (let indice in array) { //Recorre el array con otro bucle for.
    if (array[indice]%2==0) { //Si es par entrará en el búcle
        console.log(`Número par en el índice ${indice} con valor ${array[indice]}`);
    }
}

let arrayMascotas=["Perro", "Gato", "Tortuga"]
//Recorremos el array mascotas con el bucle for of.
for (let mascota of arrayMascotas) { 
    //En Java sería -> for (String mascota : arrayMascotas)
    console.log(mascota);
}