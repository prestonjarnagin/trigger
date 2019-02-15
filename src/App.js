import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Foods from './components/Foods';
import * as dateHelper from './helpers/date';
import homeButton from "./images/home.svg"
import analyticsButton from "./images/analytics.svg"

import store from './store';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <h1>Trigger</h1>
          </header>
          <section id="calendar-container">
            <h2>{dateHelper.defaultDate()}</h2>
          </section>
          <Foods />
          <footer>
            <img className="home-button" src={homeButton} alt="home button"/>
            <button className="add-button">+</button>
            <img className="analytics-button" src={analyticsButton} alt="analytics button" />
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
