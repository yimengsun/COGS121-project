<?php
  /**
    This file converts city name to city code used to search information in
    the Census API. Data that is being found will be inserted into the 
    database for easier retrieval later on. 

    The demographics from the Census API are retrieved and encoded into JSON
    objects in order for the data to be manageable back in the code.js file.
  */
  include 'server_connect.php';
  
  /* Retrieve city code from city string for Census API lookup */
  $city = $_GET['city'];
  $sql = "select place_code from CityCodes where city_name like '$city%' and level=162 limit 1;";
  $result = $conn->query($sql);

  $array = array();

  foreach($result as $row) {
    $array[] = $row['place_code'];
  }


  /* From the retrieved city code, use variables to get proper data */
  $code = $array[0];
  $demoVariables = "NAME,B01003_001E,B02001_002E,B02001_003E,B02001_004E,B02001_005E,B02001_006E,B02001_007E,B19013_001E,B23020_001E,B23025_002E,B23025_004E,B23025_005E,B23025_007E,B25064_001E,C16001_002E,C16001_003E"; 
  $demData = file_get_contents("https://api.census.gov/data/2017/acs/acs1?get=$demoVariables&for=place:$code&in=state:06");
  $array = json_decode($demData);
  $values = array();

  /* Concatenate data into a single string for easy SQL insertion */
  for($i = 1; $i < 17; $i++) {
     $values[] = $array[1][$i];
  }
  $values = implode(",", $values);

  /* Insert data into MySQL table if it's not already there */
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

  /* Query data from table and return it as a JSON. */
  $sql = "SELECT * FROM Demographics WHERE city_name LIKE '$city%'";
  $result = $conn->query($sql);
  
  $array = array();

  foreach($result as $row) {
    $array[] = $row;
  }

  print_r(json_encode($array[0]));
 
?>

