<h1>Funciones</h1>
<?php
/*
function NombreDeLaFuncion(parametros){
    intruccion de codigo;
}
*/

function holamundo(){
    echo "Hola mundo desde de una function!";
    return;
}
holamundo();//Llamar a la funcion

echo "<h1>Funciones pasandole argumentos</h1>";
function NombreFamilia($nombre){
    echo "El nombre de la familia es: <strong>$nombre</strong> <br>";
}

//Utilizar o llamar a la function
NombreFamilia("Eusebio");
NombreFamilia("Aldo");
NombreFamilia("Denisse");

echo "<h1>Funciones pasandole 2 argumentos</h1>";
function NombreAño($vnombre, $año){
    echo "$vnombre su año de nacimiento es $año<br>";
}

NombreAño("Esteban", 1997);
NombreAño("Liliana", 1997);
NombreAño("Cristina", 1997);

echo "<h1>Funciones de suma de valores</h1>";
function SumaNros(int $nro1, int $nro2){
    return $nro1 + $nro2;
}

echo "La suma es: ".SumaNros(10,5);
?>