import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="clock">
          <div className="clock-face">
            <div className="hand hrHand hour-hand"></div>
            <div className="hand min-hand"></div>
            <div className="hand secHand second-hand"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
