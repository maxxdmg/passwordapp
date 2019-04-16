import React from 'react';

let Step1 = props => {
    let cssClass = 'container p-0';
    if (props.transition)
        cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#EC9717FF', marginTop: '50px',zIndex: '5'}}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Longer Passwords & Brute Forcing  </h2>
            </div>
            <div className='w-100' />

            <div style={{ backgroundColor: '#EFAA42FF', width: '100%', padding: '2px', height: '500px' }} >
                 <p style={{'textIndent': '40px'}} className='p-2 m-0'>The length of a password is the most crucial
                 aspect of it's strength. This is due to the fundamental nature of how password cracking works. 
                 Password cracking is the act of guessing passwords until the correct one is found. Also known as
                 brute forcing passwords, all tools and methods for cracking is built upon the idea of brute force.
                 How the length of a password deters cracking is very simple. The time taken to guess a password
                 gets exponentially larger the longer a password is. For a complex password the amount of time needed
                 to guess a password with basic brute forcing is unreasonably long. </p>
                 <p style={{'textIndent': '40px'}} className='p-2 m-0'>Acording to the Offensive Security Society, the time it takes to 
                 crack (which is just simply guessing) the 7 character long password 'abcdefg' is around 4 seconds . 
                 That is pretty quick but by changing the password from the seven character long 'abcdefg'
                 to the 14 character long 'abcdefghijklmn' the time to crack is increased to 1,022.8 years. Yes you read read
                 correctly, over a thousand years (as 2019 atleast). That is a giant jump for an added 7 extra characters 
                 which shows how impactful the length of a password truly is.
                </p>
            </div>
        </div>
    );
};

export default Step1;