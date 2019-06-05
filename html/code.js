/**

  code.js is the javascript file that contains all the functions that are
  being used in our Family-Friendly website. All the functions send ajax
  request to either online API urls or php files that deal with data
  and database insertion/query.

  Graphs are also generated in this file in the success function of some
  of the ajax call. 

*/



/**
  Displays the tab contents of clicked tab.
*/
function openTab(evt, TabName) {
  
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";

  // run specific function depending on tab name
  switch(TabName) {
    case 'map':
	mapSearch(TabName);
	break;
    case 'demographics':
	demoSearch(TabName);
	break;
    case 'schools':
	schoolSearch(TabName);
	break;
    case 'weather':
	weatherSearch(TabName);
	break;
 
  }
}


/**
  Displays map of specific city.
*/
function mapSearch(TabName) {

  // retrieve GET parameters
  let searchParams = new URLSearchParams(window.location.search);
  var city = searchParams.get("city");

  var tab = $("#" + TabName);
  console.log(tab.innerHTML);
  if(tab.innerHTML != null) {
  	return;
  }

  // Concatenate map API url with city name, and send request
  let url1 = 'https://api.opencagedata.com/geocode/v1/json?key=c0ebee32124d4539819e635172ef215f&q=';
  let location = city;
  location.replace(' ', '%20');
  let url = url1 + location;

  const Http = new XMLHttpRequest();
  Http.open("GET", url);
  Http.send();
  

  // Display the map that was requested
  Http.onreadystatechange = async function(){
  	if (this.readyState == 4 && this.status == 200) {
          myObj = JSON.parse(this.responseText);
          latitude = myObj.results[0].geometry.lat;
          longitude = myObj.results[0].geometry.lng;

          L.mapquest.key = 'BhazjyordCkgt1JXwFFbyfz1X3F8IZPP';

          var map = L.mapquest.map('map', {
        	center: [latitude, longitude],
                layers: L.mapquest.tileLayer('map'),
                zoom: 12
          });
        
          map.addControl(L.mapquest.control());
        }
  }

}


/**
  Retrieve demographic census data and create graphics.
*/
function demoSearch(TabName) {

  // Retrieve get parameters
  let searchParams = new URLSearchParams(window.location.search);
  var city = searchParams.get("city");

  var tab = $("#" + TabName);
  tab.empty();

  // send ajax request to a php file that retrieves demographic data
  $.ajax({
    type: "GET",
    url: "http://206.189.223.42/getDemo.php",
    data: {city: city},
    success: function(data) {
	var canvas = document.createElement('canvas');
	canvas.id = 'myChart';
	tab.append(canvas);

	// Create pie chart with population data
	let total = data.population;
	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(document.getElementById("myChart"), {
    		type: 'pie',
		data: {
      			labels: ["White", "African American", "Natives", "Asian", "Pacific Islander", "Other"],
      			datasets: [{
        			label: "Population Percentages",
   				backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#2bab1b"],
        			data: [data.white, data.african_american, data.native, data.asian, data.pacific, data.other]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Population by Race'
      }
    }
});
	
	// Print the data retrieved from the Census API
        tab.append("<h4>Total Population: " + data.population + "</h4>");
	tab.append("<h4>White: " + percent(data.white,total)+ "%</h4>");
	tab.append("<h4>African Americans: " + percent(data.african_american,total) + "%</h4>");
	tab.append("<h4>Natives: " + percent(data.native,total) + "%</h4>");
	tab.append("<h4>Asian: " + percent(data.asian,total) + "%</h4>");
	tab.append("<h4>Pacific Islander: " + percent(data.pacific,total)  + "%</h4>");
	tab.append("<h4>Other: " + percent(data.other,total) + "%</h4>");
	tab.append("<br>");
	tab.append("<h4>Median Household Income: $" + data.median_income + "</h4>");
	tab.append("<h4>Median Gross Rent: $" + data.median_gross_rent + "</h4>");
	tab.append("<br>");
	tab.append("<h4>Total Labor Force: " + data.total_labor + "</h4>");
	tab.append("<h4>Employed: " + percent(data.employed,data.total_labor) + "%</h4>");
	tab.append("<h4>Unemployed: " + percent(data.unemployed,data.total_labor) + "%</h4>");
    },
    error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
    },
    dataType: "json"
  });

}


/**
  Display the school demograpic data with graphs.
*/
function schoolSearch(TabName){
  let searchParams = new URLSearchParams(window.location.search);
  var city = searchParams.get("city");

  // Send a request that retrieves school info
  $.ajax({
    type: "GET",
    url: "http://206.189.223.42/getSchools.php",
    data: {city: city},
    success: function(data) {
	var tab = $("#" + TabName);
	var canvas = document.createElement('canvas');
        canvas.id = 'myChart';
        tab.append(canvas);

	// Create bar chart displaying grade information
        let total = data.population;
        var ctx = document.getElementById('myChart').getContext('2d');
	let chart = new Chart(document.getElementById("myChart"), {
    		type: 'bar',
 		data: {
      			labels: ["Preschool", "Kindergarten", "Grades 1-4", "Grades 5-8", "Highschool", "College", "Graduates"],
      			datasets: [{
 		        	label: "Students",
          			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#89c3ac", "#5f7cb6"],
          			data: [data.preschool, data.kindergarten, data.first_fourth, data.fifth_eight, data.highschool, data.college, data.graduates]
        		}]
    		},
    		options: {
      			legend: { display: false },
      			title: {
 		        	display: true,
				text: 'Total Student Population Across Grades'
      			}
    		}
	});

	// Print total student population per grades
	tab.append("<h4>Total Population Under 18: " + data.total_children + "</h4>");
	tab.append("<h4>Total Enrolled: " + data.total_enrolled + "</h4>");
	tab.append("<h4>Preschool: " + data.preschool + "</h4>");
	tab.append("<h4>Kindergarten: " + data.kindergarten + "</h4>");
	tab.append("<h4>Grade 1-4: " + data.first_fourth + "</h4>");
	tab.append("<h4>Grade 5-8: " + data.fifth_eight + "</h4>");
	tab.append("<h4>Highschool: " + data.highschool + "</h4>");
	tab.append("<h4>College: " + data.college + "</h4>");
	tab.append("<h4>Graduates: " + data.graduates + "</h4>");
	tab.append("<h4>Unenrolled: " + data.unenrolled + "</h4>");


    },
    dataType: "json"
  });
}


/**
  Print out weather data
*/
function weatherSearch(TabName) {
  let searchParams = new URLSearchParams(window.location.search);
  var city = searchParams.get("city");

  var tab = $("#" + TabName);
  tab.empty();
  

  // Send ajax request to API that returns weather per city.
  $.ajax({
	type: 'GET',
	url: 'http://api.openweathermap.org/data/2.5/weather', 
	data: {q: city, units: 'imperial', APPID: '27e9deaa91a06d26459c96490ec37f63'},
	success: function(data) {
        	var tab = $("#" + TabName);
		console.log(data);
		
		// Print weather data retrieved
		tab.append("<h4>Current Weather Description: " + data.weather[0].description + "</h4>");
		tab.append("<h4>Current Humidity: " + data.main.humidity + "%</h4>");
		tab.append("<h4>Current Temperature: " + data.main.temp + "&deg;F</h4>");
		tab.append("<h4>Highest Temperature: " + data.main.temp_max + "&deg;F</h4>");
		tab.append("<h4>Lowest Temperature: " + data.main.temp_min + "&deg;F</h4>");
	},
	dataType: 'json'
  });
  
}

/**
  Helper function that returns percentages.
*/
function percent(n, total) {
  return ((n/total)*100).toFixed(2);
}

