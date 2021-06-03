import React from 'react';
import DrawerToggleButton from './sidedrawer/DrawerToggleButton';
import './navbar.css';

interface Props {
    drawerClickHandler: (() => void)
}

const NavBar: React.FC<Props> = ({drawerClickHandler} : Props) => {
    return (
        <header className='toolbar'>
            <nav className='toolbar-nav'>
                <div className='toolbar-toggle-button'>
                    <DrawerToggleButton click={drawerClickHandler}/>
                </div>
                <div className='toolbar-logo'><a href='#header'>CG</a></div>
                <div className='spacer'/>
                <div className='toolbar-nav-items'>
                    <ul>
                        <li><a href='#about'>about</a></li>
                        <li><a href='#projects'>projects</a></li>
                        <li><a href='#contact'>contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;