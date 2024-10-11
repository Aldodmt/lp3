/*BOM
    Browser Object Model
    Manipular el navegador y obtener datos 
*/
//1- Tamaño ancho de la ventana del navegador 
console.log(window.innerWidth, "Ancho de la pagina");

//2- Alto del navegador 
console.log(window.innerHeight, "Alto del navegador");

//3- crear una funcion para traer el ancho y alto del navegador 
function traerbom(ancho, largo){    
    var ancho = console.log(window.innerWidth, "Ancho de la ventana con una funcion");
    var largo = console.log(window.innerHeight, "Alto del navegador con una funcion");
}

traerbom();

//4- Traer el tamaño real del monitor o dispositivo
console.log(screen.width, "Ancho de la pagina");
console.log(screen.height, "Alto de la pg");

//5- Traer url

console.log(window.location, "Esto es la url donde estas ahora");

//6- Funcion para redireccionar a otra url
function redirect(url){
    window.location.href = url;
}
redirect(url);

//7- Abrir otra ventana del navegador
function abrirventana(url){
    window.open(url ,"","width=400, heigth=300");
}

abrirventana(url);