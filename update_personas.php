<?php
// Including database connections
require_once 'database_connections.php';
// Fetching the updated data & storin in new variables
$data = json_decode(file_get_contents("php://input"));
// Escaping special characters from updated data
$id = mysqli_real_escape_string($con, $data->id);
$nombre = mysqli_real_escape_string($con, $data->nombre);
$nif = mysqli_real_escape_string($con, $data->nif);
// mysqli query to insert the updated data
$query = "UPDATE persona SET nombre='$nombre',nif='$nif' WHERE id=$id";
mysqli_query($con, $query);
echo true;
?>

