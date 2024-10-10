/*Ejercicios
    Programa que pida al usuario ingresar un valor y un mensaje 
    que diga cual es mayor o si son iguales
*/

var nro1 = parseInt(prompt('Ingrese el valor 1 ', 0));
var nro2 = parseInt(prompt('Ingrese el valor 2 ', 0));

while(nro1<=0 || nro2<=0 || isNaN(nro1) || isNaN(nro2)){
    nro1 = parseInt(prompt('Vuelva a ingrese el valor 1 ', 0));
    nro2 = parseInt(prompt('Vuelva a ingrese el valor 2 ', 0));
}

if(nro1>nro2){
    alert("El nro 1 es mayor");
}else if(nro2>nro1){
    alert("El nro 2 es mayor");
}else if(nro1 == nro2){
    alert("Son iguales");
}