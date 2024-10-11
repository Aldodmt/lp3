/*Array arreglos multidimensionales
    Predeterminado en js
*/

'use strict'

var categorias = ["Accion", "Comedia", "Terror"];
var peliculas = ["Peli accion", "Peli comedio", "Peli terror"];

var cine = [categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[0][2]);

//1 Operaciones en array 
//1.1Añadir elementos push
peliculas.push("Batman");
console.log(peliculas);

//1.2 Quitar elemento pop

peliculas.pop();
peliculas.pop();
peliculas.pop();
console.log(peliculas);

//1.3 Añadir elementos con promt
var elemento = "";
do{
    elemento= prompt("Introduce una peli");
    peliculas.push(elemento);
}while(elemento !="PARAR");

//1.4 Recorrer array y mostrar valores en la pantalla  
peliculas.forEach((peliculas)=>{
    document.write("Peliculas: "+peliculas,"<br>");
});

//2 Convertir array en texto
var pelistring = peliculas.join();
console.log(typeof pelistring, pelistring);

//3 Convertir texto a array

var cadena = "Texto1, Texto1, Texto1";
console.log(cadena.split());

//4 Ordenar array en orden alfabetico sort
categorias.sort();
console.log(categorias);

//5 invertir  orden reverse
peliculas.reverse();
console.log(peliculas);