/*Array busqueda*/

'use strict'

var lenguajes = ["JavaScript", "Java", "PHP", "C++", "Python"];

//find

var buscafind = lenguajes.find(lenguajes => lenguajes == "Java");
console.log(buscafind);

//findIndex

var buscaIndex = lenguajes.findIndex(lenguajes => lenguajes == "PHP");
console.log(buscaIndex);

//Busqueda de valores numericos con some (devuelve true o false)
var numeros = [10,30,50,80,90,100,30];
var buscaposinr = numeros.some(numeros => numeros >=30);
console.log(buscaposinr);