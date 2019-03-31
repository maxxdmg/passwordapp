import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Intro from './Components/Intro/Intro.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
