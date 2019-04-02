import React from 'react';

let Step4 = props => {
    return (
        <div style={{ backgroundColor: '#70bb4f', marginTop: '175px' }}
            className='container p-0'>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Step 4: Strong Password </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#589B3B', width: '100%' }} >
                <ul>
                    <li> Long passwords with letters, numbers, and symbols that don't contain common phrases are the most secure. </li>
                    <li> Example "!!GreenWeb1234PaperTrumpet##" </li>
                    <li> hello mars </li>
                </ul>


            </div>
        </div>
    );
};

export default Step4;