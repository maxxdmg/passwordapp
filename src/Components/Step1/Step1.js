import React from 'react';

let Step1 = props => {
    let cssClass = 'container p-0';
    if (props.transition)
        cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#EC9717FF', marginTop: '50px' }}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Longer Passwords & Brute Forcing  </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#EFAA42FF', width: '100%', padding: '3px', paddingTop: '12px', height: '500px' }} >
                 <p style={{'textIndent': '40px'}} className='p-3'>The length of a password is the most crucial
                 aspect of it's strength. This is due to the fundamental nature of how password cracking works. 
                 Password cracking is the act of guessing passwords until the correct one is found. Also known as
                 brute forcing passwords, all tools and methods for cracking is built upon the idea of brute force.
                 How the length of a password deters cracking is very simple. The time taken to guess a password
                 gets exponentially larger the longer a password is. For a complex password the amount of time needed
                 to guess a password with basic brute forcing is unreasonably long. For example the time it takes to 
                 crack (which is just simply guessing) the 7 character long password 'abcdefg' is 0.29 millseconds 
                 as of 2015. That is pretty quick, by changing the password from the seven character long 'abcdefg'
                 to the 12 character long 'abcdefghijkl' the time to crack is increased to 2 centuries. That is a 
                 giant jump for an added 5 extra characters which shows how impactful the length of a password 
                 truly is.
                </p>
                
            </div>
        </div>
    );
};

export default Step1;