<?php
// Including database connections
require_once 'database_connections.php';
// Fetching and decoding the inserted data
$data = json_decode(file_get_contents("php://input"));
// Escaping special characters from submitting data & storing in new variables.
$nombre = mysqli_real_escape_string($con, $data->nombre);
$nif = mysqli_real_escape_string($con, $data->nif);

// mysqli insert query
$query = "INSERT into persona (nombre,nif) VALUES ('$nombre','$nif')";
// Inserting data into database
mysqli_query($con, $query);
echo true;
?>

