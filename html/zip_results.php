
<!DOCTYPE html>
 
<html lang='en-US'>
<head>
	<link rel='stylesheet' type='text/css' href='./style.css'>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src='./code.js'></script>
	
</head>
<body>
        <h1 id='title'><a href='./index.html'>Family Area Looker</a></h1>
	<h1 id='title'>Your Results for:</h1>
	<h2 id='title'>91911</h2>
	<div class="tab">
	  <button class="tablinks" onclick="openTab(event, 'security')" id='defaultOpen'>Security</button>
	  <button class="tablinks" onclick="openTab(event, 'schools')">Schools</button>
	  <button class="tablinks" onclick="openTab(event, 'parks')">Parks</button>
	  <button class="tablinks" onclick="openTab(event, 'housing')">Housing</button>
	  <button class="tablinks" onclick="openTab(event, 'weather')">Weather</button>
	</div>

	<div id="security" class="tabcontent">
	  <h3>Security</h3>
	</div>

	<div id="schools" class="tabcontent">
	  <h3>Schools</h3>
	</div>

	<div id="parks" class="tabcontent">
	  <h3>Parks</h3>
	</div>

	<div id="housing" class="tabcontent">
	  <h3>Housing</h3>
	</div>

	<div id="weather" class="tabcontent">
	  <h3>Weather</h3>
	</div>

	<script>
		document.getElementById("defaultOpen").click();
	</script>
</body>
</html>

