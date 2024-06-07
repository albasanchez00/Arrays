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

console.log("*Ejemplo de Array*");
let matriz=[[9,8,7],[6,5,4],[3,2,1],[8,5,4]];
console.log(matriz);
//Recorremos el Arrays bidimensional de otra manera
for (let f = 0; f < matriz.length; f++) {
    for (let c = 0; c < matriz[f].length; c++) { //Lo recorrerá 4 veces
        console.log(`Valor de la fila ${f} y la columna ${c} es ${matriz[f][c]}`);
    }
}



/* Actividad Resuelta 3.2 */
//Crear una matriz 3x3, rellenarla con números enteros y mostrar por pantalla los que formen parte de la diagonal.
console.log("*Actividad Resuelta 3.2*");
 let arrayD=new Array(3);
 for (let f = 0; f < arrayD.length; f++) {
     arrayD[f]=new Array(3);
     for (let c = 0; c < arrayD[f].length; c++) {
        arrayD[f][c]=Math.floor(Math.random()*100+1);
        document.getElementById("d"+f+c).innerHTML=arrayD[f][c];   
        if (f==c) {
            document.getElementById("d"+f+c).style.color="red";   
        }
    }
}
console.log(arrayD);
