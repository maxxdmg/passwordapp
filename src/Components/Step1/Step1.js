import React from 'react';

let Intro = props => {
    return (
        <div style={{ backgroundColor: '#70bb4f', marginTop: '175px' }}
            className='container p-0'>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Step 1: Password Is Too Short </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#589B3B', width: '100%' }} >
                <ul>
                    <li> Passwords that are too short are vulnerable to brute force attacks. </li>
                    <li> Example: "1234" </li>
                    <li> hello mars </li>

                </ul>


            </div>
        </div>
    );
};

export default Intro;