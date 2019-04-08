import React from 'react';

let Step2 = props => {
    let cssClass = 'container p-0';
    if (props.transition)
        cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#72AE5F', marginTop: '50px' }}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Random words & dictionary attacks </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#72D75F', width: '100%', padding: '3px', paddingTop: '12px', height: '500px'}} >
                <p>Text goes here!</p>
            </div>
        </div>
    );
};

export default Step2;