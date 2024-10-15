<h1>Funciones con cadena</h1>
<?php
    echo strlen("Hola mundo desde php");//La cantidad de valores que contiene una cadena 
    echo "<hr>";
    $cadena = "  Hola mundo  ";
    echo trim($cadena);//Sacar espacios de cadenas de textos
    echo "<hr>";
    echo str_word_count("Hola mundo desde php");//Contador de palabras
    echo "<hr>";
    $cadenainvertida = "Hola mundo desde php";
    echo strrev($cadenainvertida);//Sirve para invertir valores
    echo "<hr>";
    echo strpos("Hola mundo desde php", "mundo");
    echo "<hr>";
    echo str_replace("mundo", "planeta", "Hola mundo");
    echo "<hr>";
    echo (pi());//Devuelve en nro pi
    echo "<hr>";
    echo(min(0.150,30,85,-10,-100));//Trae el valor minimo
    echo "<hr>";
    echo(max(0.150,30,85,-10,-100));//Trae el valor mayor
    echo "<hr>";
    echo "<h1>Variables constantes</h1>";
    define("nombredeconstante", "Bienvenidos al curso de php");//Se define primero el nombre y luego el valor
    echo nombredeconstante;//Se imprime de esta forma
    echo "<hr>";//Definir array constante
    define("autos", ["BMW", "TOYOTA", "NISAN", "KIA"]);
    echo autos[3];
?>