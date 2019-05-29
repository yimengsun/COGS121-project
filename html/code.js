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

function mapSearch(TabName) {

  let searchParams = new URLSearchParams(window.location.search);
  var city = searchParams.get("city");

  var tab = $("#" + TabName);
  console.log(tab.innerHTML);
  if(tab.innerHTML != null) {
  	return;
  }

  let url1 = 'https://api.opencagedata.com/geocode/v1/json?key=c0ebee32124d4539819e635172ef215f&q=';
  let location = city;
  location.replace(' ', '%20');
  let url = url1 + location;

  const Http = new XMLHttpRequest();
  Http.open("GET", url);
  Http.send();

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

function demoSearch(TabName) {
  let searchParams = new URLSearchParams(window.location.search);
  var city = searchParams.get("city");

  var tab = $("#" + TabName);
  tab.empty();
  $.ajax({
    type: "GET",
    url: "http://206.189.223.42/getDemo.php",
    data: {city: city},
    success: function(data) {
	var canvas = document.createElement('canvas');
	canvas.id = 'myChart';
	tab.append(canvas);

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

function schoolSearch(TabName){
  let searchParams = new URLSearchParams(window.location.search);
  var city = searchParams.get("city");

  $.ajax({
    type: "GET",
    url: "http://206.189.223.42/getSchools.php",
    data: {city: city},
    success: function(data) {
	var tab = $("#" + TabName);
	var canvas = document.createElement('canvas');
        canvas.id = 'myChart';
        tab.append(canvas);

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
/*
  $.ajax({
    type: "POST",
    url: "http://206.189.223.42/getData.php",
    data: {type: TabName, city: city},
    success: function(data) {
        console.log(data);
	
	var tab = $("#" + TabName);
	tab.empty();
	tab.append("<br>");

	data.forEach(function(object, i) {

		if(i == 1) {
			var t = document.createElement('tr');
		        t.innerHTML = "<td>District</td>"+
        	           "<td>Test Score</td>"+
                	   "<td>Average District Income</td>"+
	                   "<td>Reading Score</td>"+
        	           "<td>Math Score</td>";
			tab.append(t);

		}
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + object.district + '</td>' +
                '<td>' + object.testscr + '</td>' +
                '<td>' + object.avginc + '</td>' +
                '<td>' + object.readscr + '</td>' + 
		'<td>' + object.mathscr + '</td>';
                tab.append(tr);
            });

    },
    dataType: "json"
  });*/
}

function weatherSearch(TabName) {
  let searchParams = new URLSearchParams(window.location.search);
  var city = searchParams.get("city");

  var tab = $("#" + TabName);
  tab.empty();
  
  $.ajax({
	type: 'GET',
	url: 'http://api.openweathermap.org/data/2.5/weather', 
	data: {q: city, units: 'imperial', APPID: '27e9deaa91a06d26459c96490ec37f63'},
	success: function(data) {
        	var tab = $("#" + TabName);
		console.log(data);
		tab.append("<h4>Current Weather Description: " + data.weather[0].description + "</h4>");
		tab.append("<h4>Current Humidity: " + data.main.humidity + "%</h4>");
		tab.append("<h4>Current Temperature: " + data.main.temp + "&deg;F</h4>");
		tab.append("<h4>Highest Temperature: " + data.main.temp_max + "&deg;F</h4>");
		tab.append("<h4>Lowest Temperature: " + data.main.temp_min + "&deg;F</h4>");
	},
	dataType: 'json'
  });
  
}
function percent(n, total) {
  return ((n/total)*100).toFixed(2);
}

