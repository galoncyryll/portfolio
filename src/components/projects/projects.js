import React, { Component } from 'react';
import './projects.css';
import ProjectCards from './projectCard/projectCard';

// import Brain from './img/brain.PNG';
//import Crim from './img/Crim.png';
// import GitHub from './img/GitHub.PNG';
// import DiscordBanner from './img/discordbanner.png';
// import Shop from './img/shop.PNG';
import { projectData } from '../../projectData';

class Projects extends Component {
    state = {
        projectData: projectData
    }
    render () {
        return (
            <div className='projects-body' id='projects'>
                <h1>Projects</h1>
                <div className='projects-container'>
                    {
                        this.state.projectData.map(data => {
                            return <ProjectCards 
                                        key={data.title}
                                        title={data.title}
                                        bgImage={data.bgImg}
                                        description={data.description}
                                        tech={data.tech}
                                        GitHub={data.GitHub}
                                        Demo={data.Demo}
                                        Featured={data.Featured}
                                />
                        })
                    }   
                </div> 
            </div> 
        );   
    }
}

export default Projects;