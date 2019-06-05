<!DOCTYPE html>

/* This search page got the budget and work hours and school types and */ 
/*the population of each school and gave us a list of cities from the */ 
/*census api and gave us different cities to look to. We had it so that*/ 
/*each city name that was displayed would be a link that would take us to*/ 
/* the city_results.php file given that city name.*/

<html lang='en-US'>
<head>
	<title>Parameter Search</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src='./code.js'></script>
	<link rel="shortcut icon" type="image/png" href="./pics/favicon.png"/>
	<link rel='stylesheet' type='text/css' href='./style.css'>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
	
	<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-info border-bottom box-shadow">
      <h2 class="my-0 mr-md-auto font-weight-normal"><a href='./index.html'>Family Friendly</a></h2>

      <a class="btn btn-outline-dark" href="./about.html">About</a>
  </div>

  <h1 id='title'><a id='titleRef' >
    
    <?php
      include 'server_connect.php';
      $budget = $_POST['budget'];
      $work_hours = $_POST['work_hours'];
      $school_type = $_POST['school_type'];
      $school_pop = $_POST['schools'];
      $school_divisor = 10;
      
      // if user inputted a rent that is way too low, set a lower limit for budget
      if($budget < 1500) $budget = 1500;
      // if user inputted work hours that might be too low, set a lower limit of 35
      if($work_hours < 38) $work_hours = 38;      


      $sql = "select Demographics.city_name, Demographics.median_gross_rent, Demographics.hours_worked, SchoolPopulation.$school_type from Demographics inner join SchoolPopulation on Demographics.city_name=SchoolPopulation.city_name where Demographics.median_gross_rent<=$budget and SchoolPopulation.$school_type <=$school_pop*$school_divisor and Demographics.hours_worked <= $work_hours;";

      $result = $conn->query($sql);
      foreach ($result as $row) {
            $files[] = $row;
      }
      echo "<h1>Parameter Search Results:</h1>";
      
      foreach($files as $row) {
        echo "<br>"; 
      if($school_type == 'first_fourth') {
        $type_string = 'Grades 1-4';
      } else if($school_type == 'fifth_eight') {
        $type_string = 'Grades 5-8';
      } else {
        $type_string = $school_type;
      }
      
      //use the city names as links so we can link to our city search function	
      $cityUrl = './city_results.php?city=' + str_replace(" ", "+", $row['city_name']);
      $city = str_replace(" ", "+", $row['city_name']);

      echo '<center><h1> <a href= "./city_results.php?city=' . $city . '">'.  $row['city_name'] . '</a></h1>' .
                '<h4>Median Gross Rent: ' . $row['median_gross_rent'] . '</h4>' .
                '<h4>Weekly Hours Worked: ' . $row['hours_worked'] . '</h4>' .
                '<h4>Average Total Students in each '.$type_string . ': '  . round($row[$school_type]/$school_divisor) . ' students</h4></center>';
      }
      echo "<br>";
    ?>


  </a></h1>

	

	<script>
		document.getElementById("defaultOpen").click();
	</script>
</body>
</html>
