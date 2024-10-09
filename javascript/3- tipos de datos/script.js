/*3- Tipo de datos*/ 
//Numericos

var nro1 = 50;
var nro2 = 25;
 
//Operadores 
var suma = nro1+nro2;
var rest = nro1-nro2;
var multi = nro1*nro2;
var div = nro1/nro2;
var procentaje = nro1%nro2;
var decimal = 25.5;
var verdadero = true;
var falso = false;

var texto = "El resultado de la operacion es: ";
document.write(texto, suma, "<br>");
document.write(texto, rest, "<br>");
document.write(texto, multi, "<br>");
document.write(texto, div, "<br>");
document.write(texto, procentaje, "<br>");
document.write(texto, decimal, "<br>");
document.write(texto, verdadero, " " ,falso,"<br>");

//Funciones para convertir datos
document.write("<hr>");
document.write("<h1>Funciones para convertir datos</h1>");

var numerico = '30';
document.write(numerico);
var tipodatostring = typeof(numero);
document.write(" ",tipodatostring, "<br>");
//Convertir String a numerico
var numero_converido = Number(numerico);
document.write(numero_converido);
//ver tipo de dato
var tipodato = typeof(numero_converido);
document.write(" ",tipodato, "<br>");

//Convertir nro a string

var nroentero = 40;
var convertirString = String(nroentero);
document.write(convertirString);

//ParseInt
var nroString = '100';
var parse = parseInt(nroString);
document.write("<br>"+parse);
console.log(typeof(parse));