/*Ejercicios Arrays*/

'use strict'

/*
    Crear un programa que:
    1 Pida 6 nros ingresados por pantalla
    2 Mostrar el array entero en el cuerpo de la pagina y consola
    3 Mostrar array ordenado
    4 Invertir el orden  y mostrarlo
    5 Mostrar cuantos elementos tiene
    6 Buscar un valor introducido por el usuario y que nos muestre tambien su indice 
*/

//Crear funcion para imprimir los resultados en el cuerpo de la pagina
function mostrarArray(elementos,texto=""){
    document.write("<h1>Contenido del array es "+texto+"</h1>");
    var resultado = numeros.forEach((elementos, indice)=>{
        document.write("<ul>");
            document.write("<li>"+elementos+"</li>");
        document.write("</ul>"); 
    });
}

var numeros = new Array(6);

for(var i=0;i<numeros.length;i++){
    numeros[i] = parseInt(prompt("Ingrese un valor"));
}
document.write("<h1>Contenido del array</h1>");
var resultado = numeros.forEach((valores)=>{
    document.write("<ul>");
    document.write("<li>"+valores+"</li>");
    document.write("</ul>"); 
});

console.log(numeros);

//Mostrar y ordenarlo

var ordenarlo = numeros.sort(function(a,b){return a-b});
console.log(ordenarlo);

//Invertir el orden y mostrarlo
numeros.reverse();
//Utilizar funcion creada anteriormente 
mostrarArray(numeros, " en orden reverso");

document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>");

//Buscar un valor introducido por el usuario y que nos muestre tambien su indice 
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numeros => numeros == busqueda);
var valor = numeros.find(numeros => numeros == busqueda);

if(posicion && posicion !=-1){
    document.write("El valor de la busqueda es "+valor+" en la posicion "+ posicion);
}else{
    document.write("No encontrado o no es un numero");
}