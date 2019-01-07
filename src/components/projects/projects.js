import React, { Component } from 'react';
import './projects.css';

import WOW from 'wowjs';

class Projects extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }

    onClickDiv = () => {
        return true;
    }

    render () {
        return (
            <div className='projects-body' id='projects'>
                <h1>Projects</h1>
                <div className='projects-container'>
                    <div>
                        <h2>Face Recognition App</h2>
                        <div onClick={this.onClickDiv} className='project-card1 wow fadeIn' data-wow-delay='0.1s'>
                            <div className='overlay'>
                                <a href='#viewproject'>GitHub</a>
                                <a href='#viewproject'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Portfolio</h2>
                        <div onClick={this.onClickDiv} className='project-card2 wow fadeIn' data-wow-delay='0.2s'>
                            <div className='overlay'>
                                <a href='#viewproject'>GitHub</a>
                                <a href='#viewproject'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                   <div>
                        <h2>Robofriends</h2>
                        <div onClick={this.onClickDiv} className='project-card3 wow fadeIn' data-wow-delay='0.3s'>
                            
                            <div className='overlay'>
                                <a href='#viewproject'>GitHub</a>
                                <a href='#viewproject'>Live Demo</a>   
                            </div>
                        </div>
                   </div>
                </div>       
            </div> 
        );   
    }
}

export default Projects;