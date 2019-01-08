import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render () {
        return (
            <div className='contact-body' id='contact'>
                <h1>Contact</h1>
                <p>Get in touch with me!</p>
                <div className='col-container'>
                    <div className='col-left'>
                        <div className='socials'>
                            <a className='btn wow fadeInDown' data-wow-delay='0.1s' href='https://github.com/galoncyryll' target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-github" />
                            </a>
                            <a className='btn wow fadeInDown' data-wow-delay='0.2s' href='https://www.linkedin.com/in/cyryll-joseph-galon-461710147/' target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className='btn wow fadeInDown' data-wow-delay='0.3s' href='https://codepen.io/galoncyryll/' target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-codepen" />
                            </a>    
                        </div>
                    </div>

                    <div className='col-right'>
                        <div className='contacts-container'>
                            <p><span className='green'>Email </span>: galoncyryll@gmail.com</p>
                            <p><span className='green'>Phone </span>: +1 (661) 343-1254 </p>
                        </div>
                    </div>
                </div>  
            </div>
        );   
    }
}

export default Contact;