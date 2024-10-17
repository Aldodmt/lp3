<h1>Estructura while</h1>
<?php
    /*While(condicion){
        bloque isntrucciones
        iterador++;
    }*/
    $x = 1;
    while($x <= 5){
       echo "El numero es: $x <br>"; 
        $x++;
    }
    echo "<h1>Estructura while</h1>";
    $variable = 0;
    while($variable <=100){
        echo "El numero es: $variable <hr>";
        $variable+=10;
    }
    /*do{
        bloque de instrucciones
        operador de incremento o decremento
    }while(condicion)*/
    echo "<h2>Do while</h1>";
    $z=1;
    do{
        echo "El nro es: $z <br>";
        $z++;
    }while($z <= 5);
    echo "<h1>Do while 2</h1>";
    $z=1;
    do{
        echo "El nro es: $z <br>";
        $z += 10;

    }while($z <=100);
?>      