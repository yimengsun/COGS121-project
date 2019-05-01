<?php

  include 'server_connect.php';
  $type = $_POST['type'];

  $sql = "select ref from ImageTable where type='$type';";
  $result = $conn->query($sql);

  foreach ($result as $row) {
        $files[] = $row['ref'];
  }
  $pic = $files[0];
  echo $pic;
?>
