import React, { useState, useEffect } from 'react';

import NavBar from './components/navbar/Navbar';
import SideDrawer from './components/navbar/sidedrawer/SideDrawer';
import BackDrop from './components/navbar/sidedrawer/Backdrop';
import Footer from './components/footer/Footer';

import LandingPage from './components/landingpage/LandingPage';
import Projects from './components/projects/Project';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';

import './App.css';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const WOW = require('wowjs');

const App: React.FC = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    },[]);

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);
    };

    const backDropClickHandler = () => {
        setSideDrawerOpen(false);
    };

    let backDrop;

    if (sideDrawerOpen) {
        backDrop = <BackDrop click={backDropClickHandler}/>;
    }
    return (
        <div>          
            <NavBar drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={sideDrawerOpen} click={backDropClickHandler}/>
            {backDrop}      
            <LandingPage />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer /> 
        </div>       
    );
};

export default App;
