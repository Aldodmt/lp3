/*Funciones
    Conjunto de instrucciones que se ejecutan cuando las llamas 
*/
//Definir una funcion
function calculadora(){
    var mensaje = alert("Hola soy una funcion, me tenes que llamar para que funciones");
}
//Llamar a la funcion
calculadora();

//Funcion donde se pide ingresar valor
function calcular(n1, n2, msotrar = false){
    if(msotrar == false){
        alert("tiene que activarme true");
    }else{
        var suma = n1+n2;
        return suma;
    }
}

var nro1 = parseInt(prompt("Ingrese el valor 1"));
var nro2 = parseInt(prompt("Ingrese el valor 2"));
var mostrar = prompt("Mostrar");

alert(calcular(nro1, nro2, mostrar));
