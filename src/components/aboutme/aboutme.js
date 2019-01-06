import React, { Component } from 'react';
import myImg from './myImg.jpg';
import './aboutme.css';

class AboutMe extends Component {
    render () {
        return (
            <div className='aboutme-body' id='about'>
                <h1>About</h1>
                <div className='col-container'>
                    <div className='col-left'>
                        <div className='profile'>
                            <img src={myImg} alt='my avatar' />
                            <p>
                                Hi there! I'm Cyryll Galon -<span className='full-stack'> A self-taught Web Developer. </span>
                                I graduated in 2017 with a bachelor’s degree in Information Technology from Centro Escolar University in the Philippines.
                            </p>
                            <p>
                                I'm passionate about improving user experience by cultivating great and better user interfacesand responsiveness, which results in greater user retention.
                                <span className='full-stack'> Let's colaborate and make something special! </span>
                            </p>
                        </div>    
                    </div>
                    <div className='col-right'>
                        <div className='skills'>
                            <h2>skills</h2>
                            <li>
                                <h3>HTML5</h3><span className='bar'><span className='html wow fadeInLeft'></span></span>
                            </li>
                            <li>
                                <h3>CSS3</h3><span className='bar'><span className='css wow fadeInLeft'></span></span>
                            </li>
                            <li>
                                <h3>Javascript</h3><span className='bar'><span className='js wow fadeInLeft' ></span></span>
                            </li>
                            <li>
                                <h3>React</h3><span className='bar'><span className='react wow fadeInLeft'></span></span>
                            </li>
                            <li>
                                <h3>NodeJS</h3><span className='bar'><span className='node wow fadeInLeft'></span></span>
                            </li>
                            <li>
                                <h3>PostgreSQL</h3><span className='bar'><span className='postgres wow fadeInLeft'></span></span>
                            </li>
                            <li>
                                <h3>ExpressJS</h3><span className='bar'><span className='express wow fadeInLeft'></span></span>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        );   
    }
}

export default AboutMe;