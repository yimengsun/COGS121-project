<?php
  include 'server_connect.php';
  $city = $_GET['city'];

  $city = urlencode($city);
  $url = "https://api.opencagedata.com/geocode/v1/json?key=c0ebee32124d4539819e635172ef215f&q=$city";
  $data = file_get_contents($url);
  print_r($data); 
?>

