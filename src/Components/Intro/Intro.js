import React from 'react';

let Intro = props => {
    return (
        <div style={{ backgroundColor: '#72AE5F', marginTop: '175px' }}
            className='container p-0'>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Welcome! </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#72D75F', width: '100%', padding: '3px', paddingTop: '12px'}} >
                <ul>
                    <li> hello world </li>
                    <li> hello jupiter </li>
                    <li> hello mars </li>
                </ul>
            </div>
        </div>
    );
};

export default Intro;