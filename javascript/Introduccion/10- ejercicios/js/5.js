/*Ejercicios
    Crear una tabla de multiplicar
*/

'use strict'

var nro = parseInt(prompt('Ingrese un valor'));

document.write('<h1>La tabla de multiplicar del '+nro+'</h1>');

for(var i=0; i<=10; i++){
    document.write(i+ " x " +nro+" = "+(i*nro)+"<br>");
}

//Tabla hasta el 10
for(var c=0; c<=10; c++){
    document.write("La tabla del numero es: "+c+"<br>");
    for(var j=1; j<=10; j++){
        document.write(j+" x "+c+ " = "+(j*c)+"<br>");
    }
}