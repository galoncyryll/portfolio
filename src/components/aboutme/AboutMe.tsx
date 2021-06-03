import React from 'react';
import './aboutme.css';

const AboutMe: React.FC = () => {
    return (
        <div className='aboutme-body' id='about'>
            <div className='col-container'>
                <div className='col-left'>
                    <div className='profile'>
                        <h1 className='wow fadeIn'>Hi there! I&apos;m Cyryll Galon Software Engineer.</h1>
                        <p className='wow fadeIn'>
                            I am highly-motivated, results oriented, self-driven, hard-working, fast learner, smart and eager to be a part of the team, learn new technologies, become a valuable employee of the company and bring it success.
                            When I&apos;m not programming, you can find me playing video games or learning and reading more about web development.
                        </p>
                        <p className='wow fadeIn'>
                                I&apos;m passionate about coding and problem-solving.
                            <span className='full-stack'> Let&apos;s collaborate and make something special! </span>
                        </p>
                    </div>    
                </div>
            </div>
        </div>
    );   
};


export default AboutMe;