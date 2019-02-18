import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Foods from './components/Foods';
import FoodForm from './components/FoodForm';
import Nav from './components/Nav';
import * as dateHelper from './helpers/date';

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
          <FoodForm />
          <Nav />
        </div>
      </Provider>
    );
  }
}

export default App;
