import React, { Component } from 'react';
import './projects.css';
import ProjectCards from './projectCard';

import Brain from './img/brain.PNG';
import Crim from './img/Crim.png';
import GitHub from './img/GitHub.PNG';
import DiscordBanner from './img/discordbanner.png';

class Projects extends Component {

    render () {
        return (
            <div className='projects-body' id='projects'>
                <h1>Projects</h1>
                <div className='projects-container'>
                    <ProjectCards 
                        title='CRIM'
                        bgImage={Crim}
                        description={`An app for providing reservations and storing dental patients information for the CEU Dentistry Dept.`}
                        tech={['HTML5/CSS3', 'Javascript', 'Java', 'MySQL']}
                        GitHub='https://github.com/galoncyryll/CRIM'
                    />
                    <ProjectCards 
                        title='Face Recognition App'
                        bgImage={Brain}
                        description={`A simple app that detects face from the user's input and records the entries to Postgres Database.`}
                        tech={['HTML5/CSS3', 'Javascript', 'ReactJS', 'NodeJS', 'ExpressJS', 'Clarifai API', 'Heroku']}
                        GitHub='https://github.com/galoncyryll/face-recognition-app'
                        Demo='https://face-recognition-p.herokuapp.com/'
                    />
                    <ProjectCards 
                        title='GitHub Profile Finder'
                        bgImage={GitHub}
                        description={`A simple searching app that consumes GitHub's API and shows their 5 latest repositories.`}
                        tech={['HTML5/CSS3', 'Javascript', 'jQuery', 'GitHub API']}
                        GitHub='https://github.com/galoncyryll/github-profile-finder'
                        Demo='https://galoncyryll.github.io/github-profile-finder/'
                    />
                    <ProjectCards 
                        title='cycycy Bot (Discord Bot)'
                        bgImage={DiscordBanner}
                        description={`A bot to moderate my own discord server. (Bot is in early stages and still in development)`}
                        tech={['NodeJS', 'DiscordJS', 'Javascript']}
                        GitHub='https://github.com/galoncyryll/cycycy-bot'
                    />
                </div>     
            </div> 
        );   
    }
}

export default Projects;