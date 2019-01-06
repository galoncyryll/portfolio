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
                        <i class="fab fa-github" />
                    </a>
                    <a className='btn' href='https://www.linkedin.com/in/cyryll-joseph-galon-461710147/' target='_blank' rel="noopener noreferrer">
                        <i class="fab fa-linkedin-in" />
                    </a>
                    <a className='btn' href='mailto:galoncyryll@gmail.com'>
                        <i class="fas fa-at" />
                    </a>
                    <a className='btn' href='#0'>
                        <i class="fas fa-phone" />
                    </a>       
                </div>
            </div>
        );   
    }
}

export default Contact;