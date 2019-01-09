import React from 'react';
import './sidedrawer.css';

const sideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <a href="#0" className="close" onClick={props.click}> </a>
            <ul>
                <a href='#header' onClick={props.click}><li>home</li></a>
                <a href='#about' onClick={props.click}><li>about</li></a>
                <a href='#projects' onClick={props.click}><li>projects</li></a>
                <a href='#contact' onClick={props.click}><li>contact</li></a>
                <a href='https://galoncyryll.github.io/resume/' target='_blank' rel="noopener noreferrer"><li>resume</li></a>
            </ul>
        </nav>
    );
}

export default sideDrawer;