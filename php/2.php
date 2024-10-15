<h1>Condiciones en php</h1>
<h2>Condicional if</h2>
<?php
/*
if(condicion){
bloque de construccion
}else{
    bloque de instrucciones
}
else if(condicion){
    bloque de instrucciones
}
*/
$hora = date("H");
if($hora > "19"){
    echo "Que tengas un buen dia";
}
?>
<hr>
<h2>Condicional if else </h2>
<?php
if($hora < "19"){
    echo "Que tengas un buen dia";
}else{
    echo "Que tengas buenas noches";
}
?>
<hr>
<h2>Condicional elseif</h2>
<?php
if($hora < "10"){
    echo "Que tengas un buen dia";
}elseif($hora > "20"){
    echo "Que tengas buena tarde";
}
else{
    echo "Que tengas buenas noches";
}
?>
<h1>Switch</h1>
<?php
    $color = "verde";
    switch($color){
        case "rojo":
        echo "Mi color favorito es rojo";
        break;
        case "azul":
        echo "Mi color favorito es azul";
        break;
        case "verde":
        echo "Mi color favorito es verde";
        break;
        default:
        echo "Mi color favorito no esta entre esas opciones";
    }
?>
