<?php
    
    $conexion = mysqli_connect("localhost","root","","pruebaBD"); // Estableciendo conexion con la BD
    
    if($conexion){
        echo 'Conectado exitosamente a la Base de datos';
    }else{
        echo 'No se ha podido conectar a la base de datos';
    }
    
    
?>