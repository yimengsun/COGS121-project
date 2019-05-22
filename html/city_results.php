
<!DOCTYPE html>
 
<html lang='en-US'>
<head>
	<link rel='stylesheet' type='text/css' href='./style.css'>
	<link rel="shortcut icon" type="image/png" href="./pics/favicon.png"/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src='./code.js'></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</head>
<body>
		<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-info border-bottom box-shadow">
      <h2 class="my-0 mr-md-auto font-weight-normal">Family Friendly</h2>

      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="./login.html">Login</a>
      </nav>
      <a class="btn btn-outline-dark" href="./register.html">Sign up</a>
    </div>
	<h1 id='title'>Your Results for:</h1>
	<h2 id='title'><?php echo $_GET['city'] ?></h2>
	<div class="tab">
	  <button class="tablinks" onclick="openTab(event, 'demographics')" id='defaultOpen'>Demographics</button>
	  <button class="tablinks" onclick="openTab(event, 'schools')">Schools</button>
	  <button class="tablinks" onclick="openTab(event, 'parks')">Parks</button>
	  <button class="tablinks" onclick="openTab(event, 'weather')">Weather</button>
	</div>

	<div id="demographics" class="tabcontent">
          <h3>Demographics</h3>
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

