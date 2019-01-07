import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render () {
        return (
            <div className='contact-body' id='contact'>
                <h1>Contact</h1>
                <p>Get in touch with me!</p>
                <div className='socials'>
                    <a className='btn' href='https://github.com/galoncyryll' target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-github" />
                    </a>
                    <a className='btn' href='https://www.linkedin.com/in/cyryll-joseph-galon-461710147/' target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                    </a>
                    <a className='btn' href='mailto:galoncyryll@gmail.com'>
                        <i className="fas fa-at" />
                    </a>
                    <a className='btn' href='#0'>
                        <i className="fas fa-phone" />
                    </a>       
                </div>
            </div>
        );   
    }
}

export default Contact;