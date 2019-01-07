import React, { Component } from 'react';

import NavBar from './components/navbar/navbar';
import SideDrawer from './components/navbar/sidedrawer/sidedrawer';
import BackDrop from './components/navbar/sidedrawer/backdrop';
import Footer from './components/footer/footer';

import LandingPage from './components/landingpage/landingpage';
import Projects from './components/projects/projects';
import AboutMe from './components/aboutme/aboutme';
import Contact from './components/contact/contact.js';

import './App.css';


class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

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
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backDrop}      
            <LandingPage />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer /> 
        </div>       
    );
  }
}

export default App;
