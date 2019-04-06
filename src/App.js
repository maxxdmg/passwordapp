import React, { Component } from 'react';
import './index.css';
import Header from './Components/Header/Header.js';
import Intro from './Components/Intro/Intro.js';
import Step1 from './Components/Step1/Step1.js';
import Step2 from './Components/Step2/Step2.js';
import Step3 from './Components/Step3/Step3.js';
import Step4 from './Components/Step4/Step4.js';

class App extends Component {
  state = {
    passText: '********',
    location: 0,
    animate: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }


  handleScroll = () => {
    let scrollOffset = window.pageYOffset;
    console.log(scrollOffset-this.state.location);
    if (scrollOffset - this.state.location > 135) {
      if (scrollOffset >= 135 && scrollOffset < 400)
      this.setState({passText: 'password', animate: true}, () => {
        setTimeout(() => {
          this.setState({location: scrollOffset, animate: false})
        }, 1000);
      });
      else if (scrollOffset >= 400 && scrollOffset < 600)
        this.setState({passText: 'passwordpassword', animate: true}, () => {
          setTimeout(() => {
            this.setState({location: scrollOffset, animate: false})
          }, 1000);
        });
      else if (scrollOffset >= 600 && scrollOffset < 800)
        this.setState({passText: 'passwordpassword12', animate: true}, () => {
          setTimeout(() => {
            this.setState({location: scrollOffset, animate: false})
          }, 1000);
        });
      else if (scrollOffset >= 800 && scrollOffset < 1000)
        this.setState({passText: 'shinemetroid12', animate: true}, () => {
          setTimeout(() => {
            this.setState({location: scrollOffset, animate: false})
          }, 1000);
        });
    }
  }

  render() {
    return (
      <div>
        <Header password={this.state.passText} animate={this.state.animate} />
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
