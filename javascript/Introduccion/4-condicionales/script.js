/*
4-condicionales
if(condicion){
    bloque de instrucciones
}else{
    bloque de instrucciones
}

else if(condicion){
    bloque de instruccion
}

switch(condicion){
    bloque de instruccion
}

*/

var numero = 8;

if(numero<10){
    alert('El nro es: '+numero);
}else if(numero == 10){
    alert('El nro es: '+numero)
}else{
    alert('El nro es: '+numero)
}

//Switch

var edad = 800;
var imprimir  = "";

switch(edad){
    case 18:
        imprimir = "Eres menor de edad";
        break;
        case 50:
            imprimir = "Ya eres adulto";
            break;
            case 80:
                imprimir = "Eres muy adulto";
                break;
                default:
                    imprimir = "Tienes otra edad";
                    break;
}

document.write(imprimir);   