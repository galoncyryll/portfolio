import React from 'react';
import './drawertogglebutton.css';

interface Props {
    click: (() => void)
}

const drawerToggleButton: React.FC<Props> = ({click}: Props) => {
    return (
        <button className='toggle-button' onClick={click}>
            <i className="fas fa-bars"/>
        </button>    
    );
};

export default drawerToggleButton;