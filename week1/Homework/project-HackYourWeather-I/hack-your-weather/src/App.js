import React, { Component } from 'react';
import './App.css';
import City from './City';
const weather = require('./city-weather.json');

class App extends Component {

  render() {
    return (
      <div className="App" >
        <h1>Weather</h1>
        <City />
      </div>
    )
  }
}
export default App;
