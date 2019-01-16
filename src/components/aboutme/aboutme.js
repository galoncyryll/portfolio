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
                            I am highly-motivated, results oriented, self-driven, hard-working, fast learner, smart and eager to be a part of the team, learn new technologies, become a valuable employee of the company and bring it success.
                            When I’m not programming, you can find me playing video games or learning and reading more about web development.
                            </p>
                            <p className='wow fadeIn'>
                                I'm passionate about improving user experience by cultivating great and better user interfaces, which results in greater user retention.
                                <span className='full-stack'> Let's collaborate and make something special! </span>
                            </p>
                        </div>    
                    </div>
                </div>
            </div>
        );   
    }
}

export default AboutMe;