import React from 'react';
import './sidedrawer.css';

const sideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <a href="#0" class="close" onClick={props.click}> </a>
            <ul>
                <a href='#header' onClick={props.click}><li>home</li></a>
                <a href='#about' onClick={props.click}><li>about</li></a>
                <a href='#projects' onClick={props.click}><li>projects</li></a>
                <a href='#contact' onClick={props.click}><li>contact</li></a>
                <a href='#0' onClick={props.click}><li>resume</li></a>
            </ul>
        </nav>
    );
}

export default sideDrawer;