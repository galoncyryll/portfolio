import React, { Component } from 'react';
import WOW from 'wowjs';


import NavBar from './components/navbar/navbar';
import SideDrawer from './components/navbar/sidedrawer/sidedrawer';
import BackDrop from './components/navbar/sidedrawer/backdrop';
import Footer from './components/footer/footer';

import LandingPage from './components/landingpage/landingpage';
import Projects from './components/projects/projects';
import AboutMe from './components/aboutme/aboutme';
import Contact from './components/contact/contact.js';

import './App.css';
console.log('%c What brought you here? :) are you a developer? come collaborate with me! galoncyryll@gmail.com', 'background: #222; color: #bada55');

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  componentDidMount() {
    new WOW.WOW({
        live: false
    }).init();
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler}/>;
    }
    return (
        <div>
            
            <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} click={this.backDropClickHandler}/>
            {backDrop}      
            <LandingPage /
            <AboutMe />
            <Projects />
            <Contact />
            <Footer /> 
        </div>       
    );
  }
}

export default App;
