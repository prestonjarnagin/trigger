import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Foods from './components/Foods';
import FoodForm from './components/FoodForm';

import store from './store';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FoodForm/>
          <hr/>
          <Foods />

        </div>
      </Provider>
    );
  }
}

export default App;
