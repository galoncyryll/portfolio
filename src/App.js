import React, { Component } from 'react';

import Main from './components/main/main';
import NavBar from './components/navbar/navbar';
import SideDrawer from './components/navbar/sidedrawer/sidedrawer';
import BackDrop from './components/navbar/sidedrawer/backdrop';

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
        <div className="parent-container">
            <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backDrop}
            <main style={{marginTop: '0'}}>
            <Main />
            </main>   
        </div>       
    );
  }
}

export default App;
