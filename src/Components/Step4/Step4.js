import React from 'react';

let Step4 = props => {
    let cssClass = 'container p-0';
    if (props.transition)
        cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#BF2DC7', marginTop: '500px' }}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Section header goes here! </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#D361DB', width: '100%', padding: '3px', paddingTop: '12px'}} >
                <p>Text goes here!</p>
            </div>
        </div>
    );
};

export default Step4;