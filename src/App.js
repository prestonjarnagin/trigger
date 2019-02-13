import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Foods from './components/Foods';
import FoodForm from './components/FoodForm';

class App extends Component {

  render() {
    return (
      <div className="App">
        <FoodForm/>
        <hr/>
        <Foods />

      </div>
    );
  }
}

export default App;
