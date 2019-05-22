<?php

  include 'server_connect.php';
  $type = $_POST['type'];
  $city = $_POST['city'];

  $sql = "select ref from ImageTable where type='$type';";
  $result = $conn->query($sql);

  foreach ($result as $row) {
        $files[] = $row['ref'];
  }
  $pic = $files[0];
  $response = array();
  array_push($response, $pic);


  $sql = "select district, testscr, avginc, readscr, mathscr from DistrictScores where county like '%$city%';";
  $result = $conn->query($sql);


  foreach($result as $row) {
    $response[] = $row;
  }

  echo json_encode($response);

?>
