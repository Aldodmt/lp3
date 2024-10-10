/*Funciones 
Predeterminadas en js
*/
//Funciones para transformar texto
var numero = 888;
var texto1 = "   Bienvenidos al curso de JavaScript";
var texto2 = "TEXTO EN MAYUSCULA";


//1 Transformar de nro a string
var nro_convertido = numero.toString();
console.log(nro_convertido);
console.log(typeof(nro_convertido));

//2 Cambiar valores de minuscula a mayuscula 
var texto1MAYUS = texto1.toUpperCase();
console.log(texto1MAYUS);

//3 Cambiar valores a mayus a minus
var text2minus = texto2.toLocaleLowerCase();
console.log(text2minus);

//4 Longitud de un String
var longitud = "Aldo Torres";
console.log(longitud.length);

//5 Concatenar
console.log(texto1+texto2);

//6 array - longitud
var array=["Hola", "Como", "Estas?"];
console.log(array.length);

//7 buscar por indice
var buscar = texto1.indexOf("curso");
console.log(buscar);

//8 buscar por indice 2
var buscar2 = texto1.lastIndexOf("de");
console.log(buscar2);

//9 buscar por indice 3
var buscar3 = texto1.search("java");
console.log(buscar3);

//10 math
var buscar4 = texto1.match("al");
console.log(buscar4);

//11 Quitar espacios de adelante o de atras
var sustraerespacios = texto1.substr(2);
console.log(sustraerespacios);

//12 quitar letras
var quitar = texto1.charAt(2);
console.log(quitar);

//13 busqueda con startswith cuando las palabras inician con un valor esto devuelve true o false
var buscar5 = texto1.startsWith("Bienve");
console.log(buscar5);

//14 include 
var buscar6 = texto1.includes("JavaScript");
console.log(buscar6);

//15 Reemplazar una palabra con otra
var reemplazar = texto1.replace("JavaScript", "Java");
console.log(reemplazar);

//16 Borrar una parte y devolver el valor indicado 
var borrarparte = texto1.slice(12, 20);
console.log(borrarparte); 

//17 split para convertir texto en array
var textarray = texto1.split();
var textarray = texto1.split(" ");
console.log(textarray);

//18 Quitar espacios con trim
var quitarespacios = texto1.trim();
console.log(quitarespacios);

//19 Uso de plantillas
var nombre  = prompt("Ingrese el nombre");
if(empty.nombre){
    var nombre = prompt("Ingrese el nombre");
}
var apellido = prompt("Ingrese el apellido");
//alt+96
var plantilla = `
<h1>Hola que tal</h1>
<h3>El nombre es: ${nombre}</h3>
<h3>el apellido es: ${apellido}</h3>`;

document.write(plantilla);