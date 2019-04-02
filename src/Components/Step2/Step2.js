import React from 'react';

let Intro = props => {
    return (
        <div style={{ backgroundColor: '#1C7AD8', marginTop: '50px' }}
            className='container p-0'>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Step 2: Password Is Too Common </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#4A9BE7', width: '100%', padding: '3px', paddingTop: '12px'}} >
                <ul>
                    <li> Passwords that contain common phrases are vulnerable to dictonary attacks. </li>
                    <li> Example "thisismypassword" </li>
                    <li> hello mars </li>
                </ul>
            </div>
        </div>
    );
};

export default Intro;