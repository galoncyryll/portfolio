import React, { Component } from 'react';
import './landingpage.css';

import WOW from 'wowjs';

class LandingPage extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    }
    render () {
        return (
            <section className='intro' id='header'>
                <div className='inner'>
                    <div className='content'>
                        <div className='wow fadeInDown'>
                            <h1 ><i className="fas fa-code blocker"></i>CYRYLL JOSEPH GALON</h1>
                            <h2>Full Stack Web DevelOper</h2>
                        </div>
                        <div className='skills-container'>
                            <div className='skill-cards wow fadeInDown' data-wow-delay='0.2s'>
                                <i className="fab fa-html5"/>
                                <h3>HTML5</h3>
                            </div>
                            <div className='skill-cards wow fadeInDown' data-wow-delay='0.3s'>
                                <i className="fab fa-css3-alt"/>
                                <h3>CSS3</h3>
                            </div>  
                            <div className='skill-cards wow fadeInDown' data-wow-delay='0.4s'>
                                <i className="fab fa-js-square"/>
                                <h3>Javascript</h3>
                            </div>     
                            <div className='skill-cards wow fadeInDown' data-wow-delay='0.5s'>
                                <i className="fab fa-react"/>
                                <h3>React</h3>
                            </div>   
                            <div className='skill-cards wow fadeInDown' data-wow-delay='0.5s'>
                                <i className="fab fa-node-js"/>
                                <h3>NodeJS</h3>
                            </div> 
                            <div className='skill-cards wow fadeInDown' data-wow-delay='0.6s'>
                                <i className="fas fa-database"/>
                                <h3>PostgreSQL</h3>
                            </div>  
                            <div className='skill-cards wow fadeInDown' data-wow-delay='0.7s'>
                                <i className="fas fa-server"/>
                                <h3>ExpressJS</h3>
                            </div> 
                            <div className='skill-cards wow fadeInDown' data-wow-delay='0.8s'>
                                <i className="fab fa-java" />
                                <h3>Java</h3>
                            </div>
                            <div className='skill-cards wow fadeInDown' data-wow-delay='0.9s'>
                                <i className="fab fa-php" />
                                <h3>PHP</h3>
                            </div>
                            <div className='skill-cards wow fadeInDown' data-wow-delay='1s'>
                                <i className="fas fa-database" />
                                <h3>MySQL</h3>
                            </div>               
                        </div>
                        <div className="arrow bounce">
                            <a className="fa fa-arrow-down fa-2x" href="#about"> </a>
                        </div>
                    </div>
                </div>
            </section>
        );   
    }
}

export default LandingPage;