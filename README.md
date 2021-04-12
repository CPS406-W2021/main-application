# [Toronto CYPRESS](https://cypressw2021.netlify.app/)
![logo](https://user-images.githubusercontent.com/72548456/114451620-716fe600-9ba5-11eb-87e3-27c81cd03b7b.png)

## Introduction
**CYPRESS** (City of Toronto Problem Reporting and Solution System) is designed to allow citizens to report problems that concern them about their city. Problems that can be reported to CYPRESS are any real events that involves property damage to the City of Toronto such as **utility failures, tree collapse, flooded streets, property vandalism, mould and spore growth, eroded streets and garbage/ road obstructions**. CYPRESS' mission is to make the City of Toronto a better and safer environment.

## Application Features

### 1. Home Page
The home page is the landing page of the website. In the home page, the user can log in/sign in to CYPRESS, access the FAQ section, and/or take part of a survey. If a user is unsure about a specific matter, the **FAQ section** answers the most common questions regarding CYPRESS. The **survey** is to allow feedback to continously improve CYPRESS according to the users needs. After completion, the answers to the survey are stored into the database. 

![image](https://user-images.githubusercontent.com/72548456/114468926-375d0f00-9bba-11eb-958f-afb7abe99092.png)
![image](https://user-images.githubusercontent.com/72548456/114469047-6ecbbb80-9bba-11eb-9cdf-9e618948815c.png)
![survey](https://user-images.githubusercontent.com/72548456/114468784-05e44380-9bba-11eb-9960-4b3a86da52c2.png)

### 2. User Account
To access the features of CYPRESS, a user must register for an account by filling out a registration form. If successful, the user can log in using valid credentials and is directed to the dashboard. The user can also access their account details on the **My Account** page where they can choose to edit their account information, reset their password, or delete their CYPRESS account. 

![login](https://user-images.githubusercontent.com/72548456/114472052-9709e900-9bbf-11eb-8c99-03d15a920492.png)
![image](https://user-images.githubusercontent.com/72548456/114468454-86ef0b00-9bb9-11eb-8aef-1d37b2a27fba.png)

### 3. Report a Problem
We used the [Mapbox GL JS API](https://docs.mapbox.com/mapbox-gl-js/api/) to provide a user friendly map that allows the user to pinpoint the exact location of the problem that they are reporting, hence making it easier for the city workers to fix the problem as soon as possible. Reports are shown in the map using markers (Red, Blue, Green) as well as a side bar that displays recent reports along with the report type, location, and date/time it was reported. When the user clicks on a location on the map and the **```"Click to Add a Report!"```** button , they are prompted to confirm their location then directed to a page where they can select the type of problem, enter more information, as well as choose if they want to receive updates on the report.

![image](https://user-images.githubusercontent.com/72548456/114469810-d0d8f080-9bbb-11eb-959e-f755c6372509.png)
![image](https://user-images.githubusercontent.com/72548456/114472869-1b10a080-9bc1-11eb-80ab-d95d41993eaa.png)


### 4. My Past Reports
This page displays a list of all the problems that the user has reported. The user is able to do the following:
1. **View Report:** displays the full report details as well as a status bar that notifies the user regarding any steps the City has taken to solve the problem. 
2. **Edit Report:** edit the details of a reported problem.
3. **Delete Report:** after the system prompts the user for confirmation, they can delete a report.

![image](https://user-images.githubusercontent.com/72548456/114468239-25c73780-9bb9-11eb-98da-bd2ee900596a.png)
![image](https://user-images.githubusercontent.com/72548456/114469917-fbc34480-9bbb-11eb-940d-98da14def628.png)

### 5. Vote
In the vote page, users can upvote and downvote based on the urgency, importance, or relevance of the problem. Additionally, users can also view the full report details, as well as share the report via link. Sorting by Most Recent and Most Relevant are currently not implemented, but might be implemented in a future sprint.
![image](https://user-images.githubusercontent.com/72548456/114469881-ee0dbf00-9bbb-11eb-88c0-8aac4fe29d27.png)

### 7. Contact City Officials
The contact page displays a table of Toronto's City Council along with their contact information (e-mail and telephone number), easily accessible for users who wish to speak to them directly. Users can also use the search feature and sort the table by Ward or Councillor Name. 

![image](https://user-images.githubusercontent.com/72548456/114465789-953b2800-9bb5-11eb-9666-262842aa0ebf.png)

### 8. Tell a Friend
Wish to spread the word about CYPRESS? Users can send an email to a friend regarding CYPRESS and have the option to add a personal message with their email. When a user does not add a personal message, a default message is sent instead.

![image](https://user-images.githubusercontent.com/72548456/114465913-c6b3f380-9bb5-11eb-8c67-cf3cf662f627.png)

### 9. Language Selection
When the user arrives, at website the default language is set to English; however, the users have the option of changing language at any time using the language selection feature located at the footer of the website. 

![image](https://user-images.githubusercontent.com/72548456/114465888-be5bb880-9bb5-11eb-9166-1bcac2a100fc.png)

## How to Run
In the project directory, run:
```
$ npm i 
$ npm i node-sass@4.14.1
$ npm run start 
```
Then, open http://localhost:3000 to view it in the browser.

## Acknowledgements
This project was assigned by Dr. Mišić and created for CPS406 Introduction to Software Engineering W2021.

CYPRESS is built by:
* [Farhan Mohammed](https://github.com/farhan-mohammed)
* [Rocky Kuang](https://github.com/RockyLogic)
* [Sholeh Sepehri](https://github.com/SholehSepehri)
* [Alyanna Santos](https://github.com/al-yanna)
* [Ralph Liton](https://github.com/rlitoncs)
* [James Hoang](https://github.com/JustJames7)
