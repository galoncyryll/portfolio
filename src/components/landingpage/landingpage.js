import React, { Component } from 'react';
import Projects from '../projects/projects';
import './landingpage.css';

class LandingPage extends Component {
    render () {
        return (
            <div style={{width: '100%', margin: 'auto', height: '100%'}}>
                <div className='landing-page'>
                    <div className='banner-text'>
                        <h1><i className="fas fa-code blocker"></i>CYRYLL JOSEPH GALON</h1>
                        <h2>Full Stack Web DevelOper</h2>
                        <div className='skills-container'>
                            <div className='skill-cards'>
                                <i className="fab fa-html5"/>
                                <h3>HTML5</h3>
                            </div>
                            <div className='skill-cards'>
                                <i className="fab fa-css3-alt"/>
                                <h3>CSS3</h3>
                            </div>  
                            <div className='skill-cards'>
                                <i className="fab fa-js-square"/>
                                <h3>Javascript</h3>
                            </div>     
                            <div className='skill-cards'>
                                <i className="fab fa-react"/>
                                <h3>React</h3>
                            </div>   
                            <div className='skill-cards'>
                                <i className="fab fa-node-js"/>
                                <h3>NodeJS</h3>
                            </div> 
                            <div className='skill-cards'>
                                <i className="fas fa-database"/>
                                <h3>PostgreSQL</h3>
                            </div>  
                            <div className='skill-cards'>
                                <i className="fas fa-server"/>
                                <h3>ExpressJS</h3>
                            </div>                
                        </div>
                        <hr className="styler"/>
                        <div className='social-links'>
                            <a href='https://github.com/galoncyryll' target="_blank" rel="noopener noreferrer" alt=''>
                                <i className="fab fa-github-square"/>
                            </a>
                            <a href='mailto:galoncyryll@gmail.com' target="_blank" rel="noopener noreferrer" alt=''>
                                <i className="fas fa-envelope"/>
                            </a>
                            <a href='https://www.linkedin.com/in/cyryll-joseph-galon-461710147/' target="_blank" rel="noopener noreferrer" alt=''>
                                <i className="fab fa-linkedin"/>
                            </a>
                        </div>
                        <div className="arrow bounce">
                            <a className="fa fa-arrow-down fa-2x" href="#projects"> </a>
                        </div>
                    </div>
                </div>
                <div id='projects'>
                <Projects/>
                </div>  
            </div>
        );   
    }
}

export default LandingPage;