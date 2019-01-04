import React from 'react';
import './drawertogglebutton.css';

const drawerToggleButton = (props) => {
    return (
        <button className='toggle-button' onClick={props.click}>
            <i className="fas fa-bars"/>
        </button>    
    );
}

export default drawerToggleButton;