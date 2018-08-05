<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "maps";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$mama = $_GET['from'];
echo "".$mama."";
$sql = "SELECT * FROM mappoint WHERE PointName=".$mama."";
$result = $conn->query($sql);

?>