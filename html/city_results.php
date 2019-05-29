<?php
include 'server_connect.php';
  $city = $_GET['city'];

  $sql = "select place_code from CityCodes where city_name like '$city%' and level=162 limit 1;";
  $result = $conn->query($sql);

  if(mysqli_num_rows($result)==0) {
	echo "<script>alert('We currently do not have information on this city. Try a bigger city instead.')
	      window.location.replace('index.html');
	      </script>";
  }
?>

<!DOCTYPE html>
 
<html lang='en-US'>
<head>
	<title>City Results</title>
	<link rel='stylesheet' type='text/css' href='./style.css'>
	<link rel="shortcut icon" type="image/png" href="./pics/favicon.png"/>
	<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
	<script src='./code.js'></script>
	<link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"/>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</head>
<body>
		<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-info border-bottom box-shadow">
      <h2 class="my-0 mr-md-auto font-weight-normal"><a href='./index.html'>Family Friendly</a></h2>

      <a class="btn btn-outline-dark" href="./about.html">About</a>
  	</div>

	<h1 id='title'>Your Results for:</h1>
	<h2 id='title'><?php echo $_GET['city'] ?></h2>
    <div class="container">
        <div class="tab">
        <button class="tablinks" onclick="openTab(event, 'map')" id='defaultOpen'>Map</button>
        <button class="tablinks" onclick="openTab(event, 'demographics')">Demographics</button>
        <button class="tablinks" onclick="openTab(event, 'schools')">Schools</button>
        <button class="tablinks" onclick="openTab(event, 'weather')">Weather</button>
        </div>

        <div id='map' class='tabcontent' style="width: 100%; height:500px;">
        <h3>Map</h3>
        </div>

        <div id="demographics" class="tabcontent">
            <h3>Demographics</h3>
            </div>

        <div id="schools" class="tabcontent">
        <h3>Schools</h3>
        <canvas id='myChart' width='25%'>
        </div>

        <div id="weather" class="tabcontent">
        <h3>Weather</h3>
        </div>
    </div>

	<script>
		document.getElementById("defaultOpen").click();
	</script>
</body>
</html>