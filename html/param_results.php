<?php
  include 'server_connect.php';
  $budget = $_POST['budget'];
  $work_hours = $_POST['work_hours'];
  $school_type = $_POST['school_type'];
  $school_pop = $_POST['schools'];

  $sql = "select Demographics.city_name, Demographics.median_gross_rent, Demographics.hours_worked, SchoolPopulation.$school_type from Demographics inner join SchoolPopulation on Demographics.city_name=SchoolPopulation.city_name where Demographics.median_gross_rent<=$budget and SchoolPopulation.$school_type/5 <=$school_pop and Demographics.hours_worked <= $work_hours;";

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
	echo '<h1>' . $row['city_name'] . '</h1>' .
             '<h4>Median Gross Rent: ' . $row['median_gross_rent'] . '</h4>' .
             '<h4>Weekly Hours Worked: ' . $row['hours_worked'] . '</h4>' .
             '<h4>Average Total Students in each '.$type_string . ': '  . round($row[$school_type]/5) . ' students</h4';
  }
  echo "<br>";
?>
