import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return(
        <footer>
            <div className='footer-text'>
                <p>
                        Developed and Made with <span className='green'>&#x2665;</span> by Cyryll Galon &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};


export default Footer;