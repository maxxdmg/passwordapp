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
    location: 0,
    animate: false,
    hovered: false,
    paneClass: ''
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleButtonDown = () => {
    this.setState({paneClass: 'transitionPane'}, () => {
      setTimeout(() => {
        this.setState({paneClass: ''})
      }, 1000)
    });
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
        <Controls downClick={this.handleButtonDown}/>
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
