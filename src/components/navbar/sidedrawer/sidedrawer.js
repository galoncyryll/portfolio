import React from 'react';
import './sidedrawer.css';

const sideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href='#header'>home</a></li>
                <li><a href='#projects'>projects</a></li>
                <li><a href='#0'>resume</a></li>
                <li><a href='#about'>about</a></li>
                <li><a href='#contact'>contact</a></li>
            </ul>
        </nav>
    );
}

export default sideDrawer;