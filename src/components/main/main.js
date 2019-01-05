import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../landingpage/landingpage';
import AboutMe from '../aboutme/aboutme';
import Contact from '../contact/contact';
import Projects from '../projects/projects';


const Main = () => {
    return (
            <Switch>
                <Route exact path='/'component={LandingPage} />
                <Route path='/projects'component={Projects} />
                <Route path='/aboutme'component={AboutMe} />
                <Route path='/contact'component={Contact} />
            </Switch>
    );
}       

export default Main;