<?php
  include 'server_connect.php';
  $city = $_GET['city'];

  $sql = "select place_code from CityCodes where city_name like '$city%' and level=162 limit 1;";
  $result = $conn->query($sql);

  $array = array();

  foreach($result as $row) {
    $array[] = $row['place_code'];
  }

  $code = $array[0];
  $demoVariables = "NAME,B01003_001E,B02001_002E,B02001_003E,B02001_004E,B02001_005E,B02001_006E,B02001_007E,B19013_001E,B23020_001E,B23025_002E,B23025_004E,B23025_005E,B23025_007E,B25064_001E,C16001_002E,C16001_003E"; 
  $demData = file_get_contents("https://api.census.gov/data/2017/acs/acs1?get=$demoVariables&for=place:$code&in=state:06");
  $array = json_decode($demData);
  $values = array();

  for($i = 1; $i < 17; $i++) {
     $values[] = $array[1][$i];
  }
  $values = implode(",", $values);

  $sql = "INSERT IGNORE INTO Demographics(city_name,population,white,african_american," .
         			   "native,asian,pacific,other,median_income," .
				   "hours_worked,total_labor,employed,unemployed," .
				   "out_force,median_gross_rent,english_speaking," .
				   "spanish_speaking) VALUES ('$city', $values);";

  $result = $conn->query($sql);
  if ($conn->connect_error) {
    echo $conn->connect_error;
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT * FROM Demographics WHERE city_name LIKE '$city%'";
  $result = $conn->query($sql);
  
  $array = array();

  foreach($result as $row) {
    $array[] = $row;
  }

  print_r(json_encode($array[0]));
 
?>

