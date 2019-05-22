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
  if(TabName === "Filters") {
    return;
  }
  switch(TabName) {

    case 'demographics':
	demoSearch(TabName);
	break;
    case 'schools':
	schoolSearch(TabName);
	break;
    case 'security':
	break;
 
  }
}

function demoSearch(TabName) {
  let searchParams = new URLSearchParams(window.location.search);
  var city = searchParams.get("city");

  var tab = $("#" + TabName);
  $.ajax({
    type: "GET",
    url: "http://206.189.223.42/getDemo.php",
    data: {city: city},
    success: function(data) {
        console.log(data);
    },
    error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
    }
  });

}

function schoolSearch(TabName){
  let searchParams = new URLSearchParams(window.location.search);
  var city = searchParams.get("city");
  $.ajax({
    type: "POST",
    url: "http://206.189.223.42/getData.php",
    data: {type: TabName, city: city},
    success: function(data) {
        console.log(data);
	
	// Add placeholder picture from database
	data[0] = data[0].replace(/\s/g, '');
	$("#" + TabName).html("<img src='./pics/"+data[0]+"' style='width:75%;'>");
	

	// Add school info
	if(TabName != 'schools') {
		return;
	}
	delete data[0];
	var tab = $("#" + TabName);
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
  });
}

