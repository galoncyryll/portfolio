import React from 'react';
import './backdrop.css';

interface Props {
    click: (() => void)
}

const backDrop: React.FC<Props> = ({click}: Props) => {
    return (
        <div className='backdrop' onClick={click}/>
    );
};

export default backDrop;