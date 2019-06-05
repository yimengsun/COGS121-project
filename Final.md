final.md is present in our project's GitHub repository.

final.md contains each of our team members' names along with a paragraph or bullet points briefly describing all of their contributions to your team's project.
Roy Feng
Eduardo Sanchez
Ignacio Becerra
Sun Yimeng

Roy Feng: 
Found datasets to get our information of various california cities
Organized Screenshots and  answers for each milestone md file
Full stack development, did Some MapQuest Api development with Ignacio
Connected the parameter search feature to the city search feature

Eduardo Sanchez:
Full stack development
Designed website design and style with desktop and mobile in mind
Handled git version control on remote server
Pitched initial idea for project

Ignacio Becerra:
Full stack development
Put things together so that they worked and came up with the designs and initial looks of the application.
Found ways to tie multiple APIs that could work well together so that the app was functional
Set up the website server things, so that we could develop together

Sun Yimeng:
Front End Development
Found datasets,
Finalized looks of the app and made it feel more stylish

final.md contains a list of all source code files in your GitHub project repository that your team members wrote, along with a brief description of what functionality is implemented in each file.
List of all source code files: (all our source files are in the html folder)

About.html: page that that has the description and settings of our web app. Described the scenarios and users that would use our app as well as the features that we provide the ideal users and why they are important

City_results.php: Given a city name we get all the information we can get for a city we figure out where it is on a map, we figure out the demographics, we can find the number of students in each school level, and we can check the weather in that city at that particular moment. 

Code.js: code.js is the javascript file that contains all the functions that are  being used in our Family-Friendly website. All the functions send ajax  request to either online API urls or php files that deal with data  and database insertion/query.

getData.php: This file converts city name to city code used to search information in the Census API. Data that is being found will be inserted into the database for easier retrieval later on. The demographics from the Census API are retrieved and encoded into JSON objects in order for the data to be manageable back in the code.js file.

Get Demo.php: This file convert city name to city code used to search information in the Census API. Data that is being found will be inserted into the database for easier retrieval later on. The demographics from the Census API are retrieved and encoded into JSON objects in order for the data to be manageable back in the code.js file

GetSchools.php: This file essentially turns the city name into city code use for easier Census API lookup. The school data for each school is retrieved and inserted into the MrSQL databases for easier insertion.

Index.html: This is this website’s homepage html file it contains basic UI elements such as a navbar search bar and a button link to the specific search page. It is fairly basic and lightweight as we only wanted to focus on the functionality of the wep app.

Map.html: This is an ajax call to get the google api to give us the map of the city

mapTest.php: This got the city name that was given by the user and we gave the zip code of the city that it was in

Param_results.php: This search page got the budget and work hours and school types and the population of each school and gave us a list of cities from the census api and gave us different cities to look to. We had it so that each city name that was displayed would be a link that would take us to the city_results.php file given that city name.

Param_search.html: This html file was where we had the user decide what kind of parameters they would want to have in their future cities. They might be there or nah. It’s pretty self explanatory.

Register.html: we had a fake register page that users could use to log in and register, we ended up not really using this so it was whatever

Server_connect.php: This connected to the database that we were using

Style.css:gave us some style throughout our web app, so we could use things well.

Zip_results.php: This was a prototype page that we ended up not using so we didn’t comment it, but it was still in our file folder


final.md contains a link to a SINGLE-SLIDE Google Slides presentation 
https://docs.google.com/presentation/d/1ZbuWW8HCJy_u272k3MemP5ZCm6_O56L4F8jlEi6qLmU/edit?usp=sharing



Demo video, which is due before your assigned grading date/time during Week 10 (5 points):
https://www.youtube.com/watch?v=1ZuKsnuxqNE&feature=youtu.be
