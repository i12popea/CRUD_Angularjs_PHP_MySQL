<?php
// Connecting to database as mysqli_connect("hostname", "username", "password", "database name");
$con = mysqli_connect("localhost", "root", "", "pruebas");
if ($con->connect_errno) {
    echo "Fallo la conexion a MySQL: (" . $con->connect_errno . ") " . $con->connect_error;
}
?>