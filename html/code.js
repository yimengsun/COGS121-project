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
  $.ajax({
    type: "POST",
    url: "http://206.189.223.42/getData.php",
    data: {type: TabName},
    success: function(data) {
	data = data.replace(/\s/g, '');
	$("#" + TabName).html("<img src='./pics/"+data+"' style='width:75%;'>");
    }
  });
}
