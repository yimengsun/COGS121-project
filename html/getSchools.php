<?php
  
  /**
    This file essentially turns the city name into city code use for easier
    Census API lookup. The school data for each school is retrieved and 
    inserted into the MySQL databases for easier insertion. 
  */
  include 'server_connect.php';
  
  /* Get city code from city name for census API */
  $city = $_GET['city'];
  $sql = "select place_code from CityCodes where city_name like '$city%' and level=162 limit 1;";
  $result = $conn->query($sql);

  $array = array();

  foreach($result as $row) {
    $array[] = $row['place_code'];
  }

  
  /* Use Census API with the variables for school */
  $code = $array[0];
  $demoVariables = "NAME,B09001_001E,B14001_002E,B14001_003E,B14001_004E,B14001_005E,B14001_006E,B14001_007E,B14001_008E,B14001_009E,B14001_010E"; 
  $demData = file_get_contents("https://api.census.gov/data/2017/acs/acs1?get=$demoVariables&for=place:$code&in=state:06");
  $array = json_decode($demData);
  $values = array();

  /* Concatenate results into single string for easy SQL insertion */
  for($i = 1; $i < 11; $i++) {
     $values[] = $array[1][$i];
  }
  $values = implode(",", $values);

 
  /* Insert into table */
  $sql = "INSERT IGNORE INTO SchoolPopulation(city_name,total_children, total_enrolled, preschool, kindergarten, first_fourth, fifth_eight, highschool, college, graduates, unenrolled) VALUES ('$city', $values);";

  $result = $conn->query($sql);
  if ($conn->connect_error) {
  echo $conn->connect_error;
	die("Connection failed: " . $conn->connect_error);
  }

  /* Retrieve data from table and encode as JSON */
  $sql = "SELECT * FROM SchoolPopulation WHERE city_name LIKE '$city%'";
  $result = $conn->query($sql);

  $array = array();

  foreach($result as $row) {
    $array[] = $row;
  }

  echo json_encode($array[0]);
  
?>

