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
                <a href='#header'><li>home</li></a>
                <a href='#about'><li>about</li></a>
                <a href='#projects'><li>projects</li></a>
                <a href='#contact'><li>contact</li></a>
                <a href='#0'><li>resume</li></a>
            </ul>
        </nav>
    );
}

export default sideDrawer;