# FriendFinder

## [Live Website Link](https://friend-finder-sandesh.herokuapp.com/)

## What and Why?

Friend Finder is an app that calculates scores based off the user's survey answers and uses that data to compare to other users within the database to ultimately find compatibility between the users.

## Overview

<img alt="FriendFinderDemoPicture" src="https://i.imgur.com/tYbr9mN.png" width="" height="" />

## Code Explaination

* The `server.js` file sets up the express server which is obtaining the routes from the `routing` folder containing both `apiRoutes.js` and `htmlRoutes.js`.
* The `apiRotues.js` file contains our routing logic and data for our API pages and the `htmlRoutes.js` file contains our routing logic and data for our HTML pages.
* Our internal data for the app is located in the `data` folder which contains the `friends.js` file, which is where the users `name` `photoLink` and `scores` from the survey are stored. This file is being exported to the `apiRoutes.js` file.
* The Front-end is located in the `public` folder which contains our home page `home.html` and our survey page `survey.html`.
* The best match is calculated by combining all the values from the survey questions for the user and then compared to each user in the data file. The user with the least amount of difference is returned back to the browser.
* A `modal` is then toggled, displaying the best match for the user.

## Local Setup

**Step 1 - Clone my repo using the command line below.**
```
git clone https://github.com/SandeshCharka/FriendFinder.git
```
**Step 2 - Change directory to the cloned repo folder.**
```
cd FriendFinder
```
**Step 3 - Install all required NPM packages.**
```
npm install
```
**Step 4 - Start the application server using the command line below**
```
node server.js
```


## Technologies Used

* Node JS
* Javascript
* Heroku
* Bootstrap
* NPM Packages:
    - express
    - path

## Role in development

Sole developer of application.