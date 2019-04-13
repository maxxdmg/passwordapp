import React from 'react';

let Step3 = props => {
    let cssClass = 'container p-0';
    if (props.transition)
        cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#1C7AD8', marginTop: '50px', zIndex: 5}}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Section header goes here! </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#4A9BE7', width: '100%', padding: '3px', paddingTop: '12px'}} >
                <p>Text goes here!</p>
            </div>
        </div>
    );
};

export default Step3;