import React from 'react';

import DrawerToggleButton from './sidedrawer/drawertogglebutton';
import './navbar.css';
import Resume from '../resume/Cyryll_Resume.pdf';

const navBar = (props) => {
    return (
        <header className='toolbar'>
            <nav className='toolbar-nav'>
                <div className='toolbar-toggle-button'>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className='toolbar-logo'><a href='#header'>CG</a></div>
                <div className='spacer'/>
                <div className='toolbar-nav-items'>
                    <ul>
                        <li><a href='#about'>about</a></li>
                        <li><a href='#projects'>projects</a></li>
                        <li><a href='#contact'>contact</a></li>
                        <li><a href={Resume} target='_blank' rel="noopener noreferrer">resume</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default navBar;