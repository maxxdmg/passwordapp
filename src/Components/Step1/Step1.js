import React from 'react';

let Intro = props => {
    return (
        <div style={{ backgroundColor: '#D65155', marginTop: '50px' }}
            className='container p-0'>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Step 1: Password Is Too Short </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#EC555A', width: '100%', padding: '3px', paddingTop: '12px' }} >
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