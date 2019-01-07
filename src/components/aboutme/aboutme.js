import React, { Component } from 'react';
import myImg from './myImg.jpg';
import './aboutme.css';

class AboutMe extends Component {
    render () {
        return (
            <div className='aboutme-body' id='about'>
                <div className='col-container'>
                    <div className='col-left'>
                        <div className='profile'>
                            <img className='wow fadeIn' src={myImg} alt='my avatar' />
                            <h1 className='wow fadeIn'>Hi there! I'm Cyryll Galon -<span className='full-stack'> A self-taught Web Developer. </span></h1>
                            <p className='wow fadeIn'>  
                                I graduated in 2017 with a B.S. in Information Technology from Centro Escolar University in the Philippines.
                            </p>
                            <p className='wow fadeIn'>
                                I'm passionate about improving user experience by cultivating great and better user interfaces, which results in greater user retention.
                                <span className='full-stack'> Let's colaborate and make something special! </span>
                            </p>
                            <p className='wow fadeIn'>
                            I am highly-motivated, results oriented, self-driven, hard-working, fast learner and smart eager to be a part of the team, learn new technologies, become a valuable employee of the company and bring it success.
                            When I’m not programming, you can find me playing video games or learning and reading more about web development.
                            </p>
                        </div>    
                    </div>
                    {/* <div className='col-right'>
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
                            <li>
                                <h3>Java</h3><span className='bar'><span className='java wow fadeInLeft'></span></span>
                            </li>
                            <li>
                                <h3>PHP</h3><span className='bar'><span className='php wow fadeInLeft'></span></span>
                            </li>
                        </div>
                    </div> */}
                </div>
            </div>
        );   
    }
}

export default AboutMe;