import React from 'react';
import UpButton from './UpButton.js';
import DownButton from './DownButton.js';

const Controls = props => {
    return (
        <div className={'row'} style={{ marginTop: '50px', backgroundColor: 'transparent', padding: '20px',
        position: 'fixed', width: '100px',
        height: '150px', marginLeft: '0px', zIndex: '10' }}>
            <UpButton 
                clicked={props.upClick}
                disabled={props.upDisabled} 
                 />
            <div className='w-100' />
            <DownButton 
            	clicked={props.downClick} 
                disabled={props.downDisabled} />
        </div>
    );
};

export default Controls;