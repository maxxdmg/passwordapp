import React, { Component } from 'react';
import './index.css';
import Header from './Components/Header/Header.js';
import Intro from './Components/Intro/Intro.js';
import Step1 from './Components/Step1/Step1.js';
import Step2 from './Components/Step2/Step2.js';
import Step3 from './Components/Step3/Step3.js';
import Step4 from './Components/Step4/Step4.js';
import Controls from './Components/Controls/Controls.js';

class App extends Component {
  state = {
    passText: '********',
    paneClass: '',
    upBtnDisabled: true,
    downBtnDisabled: false
  };


  handleButtonDown = () => {
    const currClass = this.state.paneClass;
    switch (currClass) {
      case 'transitionPane1':
        this.setState({paneClass: 'transitionPane2', passText: 'thisismypassword'});
        break;

      case 'transitionPane2':
        this.setState({
          paneClass: 'transitionPane3', 
          passText: 'fastpasscoral'
        });
        break;

      case 'transitionPane3':
        this.setState({paneClass: 'transitionPane4', downBtnDisabled: true});
        break;

      case 'transitionPane4':
        break;

      default:
        this.setState({
          paneClass: 'transitionPane1', 
          upBtnDisabled: false,
          passText: 'password'});
        break;
    }
  }


  handleButtonUp = () => {
    const currClass = this.state.paneClass;
    switch (currClass) {
      case '':
        break;

      case 'transitionPane2':
        this.setState({paneClass: 'transitionPane1', passText: 'password'});
        break;

      case 'transitionPane3':
        this.setState({paneClass: 'transitionPane2', passText: 'thisismypassword'});
        break;

      case 'transitionPane4':
        this.setState({
          paneClass: 'transitionPane3', 
          passText: 'fastpasscoral', 
          downBtnDisabled: false});
        break;

      default:
        this.setState({paneClass: '', upBtnDisabled: true});
        break;
    }
  }

  render() {
    return (
      <div>
        <Header password={this.state.passText} animate={this.state.animate} />
        <Controls
            downDisabled={this.state.downBtnDisabled}
            upDisabled={this.state.upBtnDisabled}
            downClick={this.handleButtonDown}
            upClick={this.handleButtonUp} />
        <Intro transition={this.state.paneClass}/>
        <Step1 transition={this.state.paneClass}/>
        <Step2 transition={this.state.paneClass}/>
        <Step3 transition={this.state.paneClass}/>
        <Step4 transition={this.state.paneClass}/>
      </div>
    );
  }
}

export default App;
