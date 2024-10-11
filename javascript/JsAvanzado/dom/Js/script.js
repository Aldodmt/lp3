/*DOM 
Document Object Model*
El DOM se aplica a la etiquetas HTML mediante el atributo id 
En el caso de utilizar DOM las etiquetas html <script> se inicializaran del
finalizar el body
*/

//1 Ingresar el elemento por su id 
/*var caja = document.getElementById("micaja").innerHTML = ("Texto cambiado con DOM");
console.log(caja);*/
'use strict'
function cambiarColor(color, color2){
    caja.style.background = color;
    otraforma.style.background = color2;
}
//Seleccionar por id
var caja = document.getElementById("micaja");
caja.innerHTML = "Texto cambiado por segunda vez Skeleeer";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "while";
caja.className = "micajaconclase";
console.log(caja);

//Seleccionar por querySelector

var otraforma = document.querySelector("#micaja2");
otraforma.style.color = "blue";
console.log(otraforma);

//Seleccionar elementos por etiqueta
var todosDiv = document.getElementsByTagName('div');
var valordivseleccionado = todosDiv[2].textContent;
console.log(valordivseleccionado);

var cambiarSeleccionado = todosDiv[2];
cambiarSeleccionado.style.background = "green";

//Recorrer todos los div con for in 
var todosDiv = document.getElementsByTagName('div');
var valor;
for(valor in todosDiv){
    if(typeof todosDiv[valor].textContent == 'string'){
    var parrafo = document.createElement("p");//Crear parrafo
    var texto = document.createTextNode(todosDiv[valor].textContent);
    //parrafo.append(texto);//Una manera de mandar antes del texto
    parrafo.prepend(texto);//'' '' despues del texto
    console.log(parrafo);
    document.querySelector('#miseccion').append(parrafo);
    }
}

//Como llamar a elementos por su clase 
var divclase = document.getElementsByClassName('miclase');
divclase[0].style.background = "red";
console.log(divclase); 