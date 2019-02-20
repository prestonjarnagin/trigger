import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Calendar from './components/Calendar';
import Foods from './components/Foods';
import FoodForm from './components/FoodForm';
import Nav from './components/Nav';
import Triggers from './components/Triggers';

import store from './store';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <h1>Trigger</h1>
          </header>
          <Triggers />
          <Calendar />
          <Foods />
          <FoodForm />
          <Nav />
        </div>
      </Provider>
    );
  }
}

export default App;
