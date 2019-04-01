import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Intro from './Components/Intro/Intro.js';
import Step1 from './Components/Step1/Step1.js';
import Step2 from './Components/Step2/Step2.js';
import Step3 from './Components/Step3/Step3.js';
import Step4 from './Components/Step4/Step4.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </div>
    );
  }
}

export default App;
