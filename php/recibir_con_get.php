<html>
<body>
    <?php
        if(isset($_GET['nombre']) && isset($_GET['email'])){
            $nombre = $_GET['nombre'];
            $email = $_GET['email'];
        }else{
            echo "No se ha ingresado el nombre o el email";
        }
    ?>
    Hola: <?php echo $nombre; ?><br>
    Tu email es: <?=$email ?>
</body>
</html>