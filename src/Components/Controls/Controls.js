import React from 'react';
import UpButton from './UpButton.js';
import DownButton from './DownButton.js';

const Controls = props => {
    return (
        <div className={'row'} style={{ marginTop: '50px', backgroundColor: 'transparent', padding: '20px',
        position: 'fixed', width: '100px',
        height: '150px', float: 'left', marginLeft: '35px' }}>
            <UpButton />
            <div className='w-100' />
            <DownButton />
        </div>
    );
};

export default Controls;