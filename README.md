[![Build Status](https://travis-ci.com/Diazblack/trigger.svg?branch=master)](https://travis-ci.com/Diazblack/trigger)
[![Waffle.io - Columns and their card count](https://badge.waffle.io/prestonjarnagin/trigger_backend.svg?columns=all)](https://waffle.io/prestonjarnagin/trigger_backend)
[![Heroku](https://heroku-badge.herokuapp.com/?trigger-105=heroku-badge)]

# Trigger

## Introduction
The application was designed to help users track possible triggers of you common health conditions. Users can add foods and reactions, logging them by day and time using a simple user interface.  By tapping on the days or arrows in the date navigator, the user can go to previous days and view foods consumed and past reactions.  Also, the analytics page will give the user useful information about possible triggers sorted by frequency and likelihood of being connected to the condition.    

## Initial Setup

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

From GitHub clone down repository using the following commands in terminal:

    git clone git@github.com:Diazblack/trigger.git
    cd trigger

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

When a user first visits the page, they see an index of foods and reactions for the current day, sorted by time. The grey background represents the food items and the brown background represents the reactions. The user can scroll through dates using the icons on the date navigator or by clicking on the date.  When the selected date is changed, the page will populate with the items of the particular date.  

![homepage](screenshots/home-page.png)

#### Adding new Foods or Reactions
When a user taps on the green `+` button at the bottom of the page, a form will emerge where the user can choose between foods or reactions, enter a name, add the time when the food was consumed and click submit to add the item to the current date displayed on the center of the date navigator.

![Add Food](screenshots/add-form-reactions.png)

__Note:__ the time should be added in the format `hh:mm PM`(10:00 AM). Also, if the user wants to add the item to a  different date, they should first navigate to that date using the date navigator before attempting to add an item for that date.

![Add Reaction](screenshots/add-form-2.png)

#### Editing Foods and Reactions

Next to each food or reaction, the user will see an edit button (pencil icon) that allows them to update the information in the entry. When the button is tapped, a form will display with the name and time, allowing them to change either field. In order to save the changes the user clicks the save button. If the user decides not the proceed with the changes, they can tap the cancel button, leaving the item in the previous state.


![Edit Item](screenshots/update.png)

#### Deleting Foods or Reactions
A user can click on the delete button (`X` icon) next to each item to delete the entry.  When the icon is clicked, two new buttons will appear and the user can click on cancel or on delete to proceed with the changes.

![Delete Food](screenshots/delete.png)

#### Analytics

In the bottom left corner of the app is the analytics button (graph icon). When the icon is tapped, the the page will display the analytics information for all reactions added by the user.

![Analytics](screenshots/scroll-date.png)

When the analytics is displayed, the user can scroll through the different reactions (displayed at the top of the screen) using the arrows on the sides. Below, the app will display the occurrences of the reaction in different periods of time. Also below, the user will see a scrolling component with the potential triggers. A frequency percentage is displayed for each potential trigger, indicating the likelihood that the food is related to the reaction, relative to other foods. At the bottom right corner of the page there is an help button (`?` icon) that will display relevant information about the analytics page when clicked.  

__Note:__ The information displayed in this app are not medical opinions.  Consult your doctor for professional advice related to any medical condition.

![Analytics Page](screenshots/analytics.png)

## Production and Services

A link to the backend app can be found with the documentation [here](https://github.com/prestonjarnagin/trigger_backend).

The link of the application on Production can be found [here](https://trigger-105.herokuapp.com/).

## Core Contributors

### Front End Creators
* Cesar Jolibois - Github: [Diazblack](https://github.com/Diazblack)
* Michael Gatewood - Github: [mngatewood](https://www.github.com/mngatewood)

### Back End Creators
* Quinn krug - Github: [Q-Win](https://github.com/Q-Win)
* Preston Jarnagin - Github: [prestonjarnagin](https://www.github.com/prestonjarnagin)


## To Contribute

Fork and clone this repository. If you generate a pull request,  we can start a discussion about of the feature you build or you can contact us in the links above.   

## Built With

* [JavaScript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Enzyme](https://github.com/airbnb/enzyme)
