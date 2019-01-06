import React, { Component } from 'react';
import ProjectCard from './projectcard';
//import './projects.css';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 0
        };
    }
    render () {
        return (
            <div className='project-container'>
                <h1>Projects</h1>
                <div>
                    <ProjectCard />
                </div>
            </div> 
        );   
    }
}

export default Projects;