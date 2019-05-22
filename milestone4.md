1. milestone4.md is present in our project's GitHub repository

2. milestone4.md contains screenshots of our latest UI Webpages.
  ![ScreenShot 8](https://raw.githubusercontent.com/yimengsun/COGS121-project/master/ScreenShot8.png)
  
  ![ScreenShot 9](https://raw.githubusercontent.com/yimengsun/COGS121-project/master/ScreenShot9%20.png)
  
  ![ScreenShot 10](https://raw.githubusercontent.com/yimengsun/COGS121-project/master/ScreenShot10.png)

3. milestone4.md explains how our UI's screenshots hae improved upon our milestone3.md versions in a noticeable way. Our milestone3's UI had changes to color, but it was missing the formatting and style that a more polished website has. Our milestone3's website looked unfinished because it was very basic. We added a lot of formatting and style to our webpages, giving them a more finished look. We were able to make the functionality more apparent, making our UI simpler and more efficient.

4. milestone4.md describes at least 2 non-trivial actions that users can perform when they use your app. They must demonstrate our app's core functionality, and be significantly different from one another.

User Action 1: Our first action will be able to search up a city and find a lot of its information up. We will display crucial information like school test scores, security, costs, and more of living in the city that you searched up. To do this, there should be an input text field under a sign to search up a city, once you input a city, and press the submit button. The information will be shown to you.

User Action 2: Our second action will be able to input several parameters that a user wants to see in cities. Then we will display the cities that most closely fit the the parameters that the user inputted. You can press the search button under the prompt of searching for specific parameters and it'll take you a page that has several parameters. You can input what you want in your city, and a list will be shown to you.

5. User Action 1 can be sucessully performed during our grading session just by reading your written description. 

6. We will convince the TA that User Action 1 is part of our app's core functionality. 
Our User Action 1 is searching for a particular city and finding relevant information. This is important to our functionality because there are many factors that go into a family's decision to settle in a particular city and raise their family there. When families come to our website and check out a city they are curious about, they want to know about a city's school systems, a city's security, the costs to live there, and many other things. We provide this functionality for families that will use this functionality to make a informed decision on where to raise their families.

7. We will explain the code we wrote to implement User Action 1. 
To implement User Action 1, we decided to use multiple datasets that contained relevant information about cities in California. We included a security dataset, a healthy weight dataset, a traffic dataset, and a cost of living Dataset. We uploaded the data from those datasets to our Database. When prompted to search for a particular city's information. We will do multiple SQL Queries to get information about the city we are searching up. We display this information in our tabs, giving the user a way to visualize the information shown to them.

8. We will explain to our TA that User Action 1 was non-trivial to implement.
User Action 1 was non-trivial to implement because we had to figure out which datasets to use in our Database. Then we had to upload the Datasets into our database and get our back end queries to connect with our front end to display the information. We didn't simply put a link to the datasets, or just paste all the info on the webpage. We formatted the information very well in our database and simply showed our users the information on the city that specifically asked for.

9.  User Action 2 can be sucessully performed during our grading session just by reading your written description. 

10. We will convince the TA that User Action 2 is part of our app's core functionality.
Our User Action 2 is inputting specific parameters and finding cities that closely match what we are looking for. This is very functional for our users because we know that user's families are very particular on certain aspects of a city. We want to bring a more customized search for families that know exactly what they want. Giving people ideas on where to live will allow our families to get a better idea on their options. They can take note of the cities that show up in the search and look them up with User Action 1 to take a closer look.

11. We will exlain the code we wrote to implement User Action 2. 
We used the Census API to populate our Databases with information on all the cities in California. We input city information like population breakdowns, children population, School enrolment, Median Household income, labor force, Median Rent, and English Speakers. We upload this information from the Census API and insert it into our Database, then we do queries based on the inputted parameter options that the user wanted.

12. We will explain to our TA that User Action 2 was non-trivial to implement.
Our User Action 2 was non-trivial to implement. We have parameters actions to calculate gross rent, household income, hours worked, as well as other variables. We can figure out population and labor forces. We use a Census API to get all of the information, which we stored in our databases, then we were able to go through our information and get the relevant cities that match the parameters from the data. Our User Action 2 is non-trivial because we don't just put all the cities on a web page, or have a link to the information. We search our databases for the information that the User wants and return it to them as viable locations to raise a family. 
