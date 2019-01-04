import React from 'react';
import { Link } from 'react-router-dom';
import './sidedrawer.css';

const sideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/resume'>resume</Link></li>
                <li><Link to='/aboutme'>about</Link></li>
                <li><Link to='/contact'>contact</Link></li>
            </ul>
        </nav>
    );
}

export default sideDrawer;