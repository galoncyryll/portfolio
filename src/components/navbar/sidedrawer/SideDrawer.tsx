import React from 'react';
import './sidedrawer.css';

interface Props {
    show: boolean;
    click: (() => void);
}

const SideDrawer: React.FC<Props> = ({show, click}: Props) => {
    let drawerClasses = 'side-drawer';
    if (show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <a href="#0" className="close" onClick={click}> </a>
            <ul>
                <a href='#header' onClick={click}><li>home</li></a>
                <a href='#about' onClick={click}><li>about</li></a>
                <a href='#projects' onClick={click}><li>projects</li></a>
                <a href='#contact' onClick={click}><li>contact</li></a>
            </ul>
        </nav>
    );
};

export default SideDrawer;