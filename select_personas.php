<?php
//database settings
require_once 'database_connections.php';

$result = mysqli_query($con, "select * from persona");

$data = array();

while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
    print json_encode($data);
?>