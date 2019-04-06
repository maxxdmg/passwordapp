import React from 'react';
import UpButton from './UpButton.js';

const Controls = props => {
    return (
        <div className={'row'} style={{ marginTop: '50px', backgroundColor: '#5F4A62',
        position: 'fixed', border: '1px solid red', width: '100px', height: '150px', float: 'left', marginLeft: '35px' }}>
            <UpButton />
            <div className='w-100' />
            <button>
                down
            </button>
        </div>
    );
};

export default Controls;