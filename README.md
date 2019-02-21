https://travis-ci.org/Diazblack/trigger.svg?branch=master
[![Waffle.io - Columns and their card count](https://badge.waffle.io/prestonjarnagin/trigger_backend.svg?columns=all)](https://waffle.io/prestonjarnagin/trigger_backend)
[![Heroku](https://trigger-105.herokuapp.com/?app=heroku-badge)]

# Trigger

## Introduction
The application was design to help you track the possible triggers of you common affections. Users can add foods and affections logging them by day and hour using our simple UI, just by tapping in the days or arrows on the navbar the user can go to previous days and view foods consumed and past reactions, also our analytics sections will give the user useful information about possible triggers sorted by affections.    

## Initial Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

From GitHub clone down repository using the following commands in terminal:
* `git clone git@github.com:Diazblack/trigger.git`
* `cd trigger`

## How to Use

In the project directory run:

### `npm install`

To install all the dependencies.

### Running the Server Locally

### `npm start`

Runs the app in the development mode, to view it in the browser click the link bellow:
[http://localhost:3000](http://localhost:3000).


### `npm test`

Launches the test runner, after the test suite run it will display the coverage.

### Home Page

When a user first visits the page they see an index of foods and affections for the current day, they are sorted by hour. The grey background represent the food items and the brown background for the affections. The user can scroll the date using the icons on the navbar, click on the date will populate the page with the items of the particular date, and tapping in the arrows let the user navigate through the previous or next dates.  

![homepage](screenshots/home-page.png)

#### Adding new Foods or Affections
A user can tap on the red `+` button at the bottom of the page, a form will display 

![Filter Food](screenshots/FilterFood.png)

#### Editing Foods
A user can also click on the Edit button next to a food to change the food name and calories. Once the edit button is clicked, the user will have the option to save their changes.

![Edit Food](screenshots/editFoodInputFields.png)

#### Creating Foods
A user can fill in the name and calories of a new food and click on "Add Food" to create a new food.  Once created, that new food will be added to the food list.

![Create Food](screenshots/createFood.png)

#### Deleting Foods
A user can also click on the red button next to an individual food to delete it from the database.

## Built With

* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Emzyme](https://github.com/airbnb/enzyme)
