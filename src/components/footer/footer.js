import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className='footer-text'>
                    <p>
                        Developed and Made with <span className='green'>&#x2665;</span> by Cyryll Galon &copy; 2019
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;