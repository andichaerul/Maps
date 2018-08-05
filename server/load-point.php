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

$sql = "SELECT * FROM mappoint";
$result = $conn->query($sql);
?>
[
<?php
$n = 0 ;
foreach ($result as $row) {
	echo "{
	\"id\":".$n.",
	\"name\":\" ".$row['PointName']."\"
	},";
$n++;	
}
?>
{
	"id":100,
	"name":"No"
}
]
