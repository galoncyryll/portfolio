import React, { Component } from 'react';
import myImg from './myImg.jpg';
import './aboutme.css';

class AboutMe extends Component {
    render () {
        return (
            <div className='aboutme-body'>
                <div className='about-content'>
                    <div className='profile'>
                    <img src={myImg} alt='my profile avatar'/>
                    </div>
                    <div className='profile-text'>
                        <h2>
                            Hi there! I'm Cyryll Galon - A self-taught <div className='full-stack'> Web Developer</div>
                        </h2>
                        <hr className='styler' />    
                        <p>
                            I graduated in 2017 with a bachelor’s degree in Information Technology from Centro Escolar University in the Philippines. 
                            I worked as an IT Support in the past, but have since moved onto Web Development because I've always loved and have the passion to Code.
                            I am a fan of clean and simplicity in both design and code.
                        </p>
                        <p>
                            I am highly-motivated, results oriented, self-driven, hard-working, fast learner and smart eager to be a part of the team, learn new technologies, become a valuable employee of the company and bring it success.
                            When I’m not programming, you can find me playing video games or learning and reading more about web development.
                        </p>
                    </div>    
                </div>
            </div>
        );   
    }
}

export default AboutMe;