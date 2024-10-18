<?php
include 'conexion.php';
if(isset($_POST['Insertar'])){
    if(isset($_POST['nombre']) && isset($_POST['apellido'])){
        $existe = true;
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
    }else{
        $existe = false;
        echo 'No existe el nombre o el apellido';
    }
    if($existe){
        $query = mysqli_query($conexion, "INSERT INTO persona (id, nombre, apellido) 
        VALUES(null, '$nombre', '$apellido')")
        or die('error'.mysqli_error($conexion));
        
        if($query){
            echo "La insercion de datos fue exitosa!!";?>
                <meta http-equiv = "refresh" content="5, url=http://localhost/lp3/php/pruebamysqlphp/index.php">
        <?php }else{
            echo 'Problemas para insertar';
        }
    }
}
elseif(isset($_POST['EnviarEditar'])){
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];

    $query = mysqli_query($conexion, "UPDATE persona SET nombre = '$nombre', apellido = '$apellido' 
    WHERE id = $id")
    or die('error'.mysqli_error($conexion));
    if($query){
        echo "La modificacion fue exitosa";?>
        <meta http-equiv = "refresh" content="5, url=http://localhost/lp3/php/pruebamysqlphp/index.php">
    <?php }else{
        echo "No se pudo realizar la modificacion";
    }
}
elseif(isset($_POST['EnviarBorrar'])){
    $id = $_POST['id'];
    $query = mysqli_query($conexion, "DELETE FROM persona WHERE id = $id")
    or die('error'.mysqli_error($conexion));
    if($query){
        echo "La eliminacion fue exitosa";?>
        <meta http-equiv = "refresh" content="5, url=http://localhost/lp3/php/pruebamysqlphp/index.php">
    <?php }else{
        echo "No se pudo eliminar";
    }
}

?>