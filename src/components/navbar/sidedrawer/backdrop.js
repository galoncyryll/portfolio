import React from 'react';

import './backdrop.css';

const backDrop = (props) => {
    return (
        <div className='backdrop' onClick={props.click}/>
    );
}

export default backDrop;