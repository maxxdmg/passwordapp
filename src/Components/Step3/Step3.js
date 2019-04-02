import React from 'react';

let Step3 = props => {
    return (
        <div style={{ backgroundColor: '#70bb4f', marginTop: '175px' }}
            className='container p-0'>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Step 3: Password Only Contains Letters </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#589B3B', width: '100%' }} >
                <ul>
                    <li> Passwords that only have letters are more vulnerable to brute force attacks than passwords that also use numbers and symbols. </li>
                    <li> Example "GreenWebPaperTrumpet" </li>
                    <li> hello mars </li>
                </ul>


            </div>
        </div>
    );
};

export default Step3;