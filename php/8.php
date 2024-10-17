<h1>Proceso formulario dentro de un mismo archivo con GET</h1>
<html>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="GET">
    Nombre: <input  type="text" name=nombre>
    <input type="submit">
    </form>
    <?php
        if($_SERVER["REQUEST_METHOD"]=="GET");
        $nombre = $_GET['nombre'];
        if(empty($nombre)){
            echo "Escriba un nombre!";
        }else{
            echo "El nombre ingresado es: $nombre";
        }
    ?>
</body>
</html>