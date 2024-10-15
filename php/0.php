<!DOCTYPE html>
<html>
<body>
<?php
    //Comentario de linea simple
    /*Esto es un comentario extendido*/
    //Variable
    $variable = 5;
    echo $variable;
    echo "<hr>";//Ingresar codigo html en php
    $cadena = "Hola mundo desde php";
    print $cadena;
    echo "<hr>";//Ingresar codigo html en php
    $cadena2 = 'Hola mundo desde php con comilla simple';
    echo "<h1>$cadena2</h1>";
    echo "Esto es "," String ", " se pueden escribir separados entre ,";
    echo "<hr>";
    $variablebooleana = true;
    var_dump($variablebooleana);//Sirve para saber que contiene una variable, es como el typeof en JS
    echo "<hr>";
    $variabledecimal = 13.14;
    var_dump($variabledecimal);
?>
<h1>Tipo de datos objetos</h1>
<?php

    class Auto {
        function Auto(){
            $this->marca = "Kia";
            $this->modelo = "Picanto";
            $this->motor = 2.0;
        }
    }
    
    $automovil = new Auto();
    echo $automovil->modelo;
    echo $automovil->marca;
    echo "<hr>";
    echo "<h1>Variables null</h1>";
    $x = "Hola mundo";
    $x = null;
    var_dump($x);
?>
</body>
</html>