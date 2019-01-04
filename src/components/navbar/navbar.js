import React from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleButton from './sidedrawer/drawertogglebutton';
import './navbar.css';

const navBar = (props) => {
    return (
        <header className='toolbar'>
            <nav className='toolbar-nav'>
                <div className='toolbar-toggle-button'>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className='toolbar-logo'><Link to='/'>CG</Link></div>
                <div className='spacer' />
                <div className='toolbar-nav-items'>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/resume'>resume</Link></li>
                        <li><Link to='/aboutme'>about</Link></li>
                        <li><Link to='/contact'>contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default navBar;