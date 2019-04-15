import React from 'react';

let Step2 = props => {
    let cssClass = 'container p-0';
    if (props.transition)
        cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#72AE5F', marginTop: '50px', zIndex: 5}}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Common Phrases, Random Words & Dictionary Attacks </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#72D75F', width: '100%', padding: '2px', height: '500px' }} >
                 <p style={{'textIndent': '40px'}} className='p-2 m-0'>A common method for creating long passwords is to use a common phrase or
                  a string of related words, such as "ThisIsMyPassword" or "GreenTreeOutsideGround".  While long passwords like these are resitant
                  to traditional brute force attacks, they are still vulnerable to a form of brute force attack known as a dictionary attack.   
                  A dictionary attack is a form of password cracking that checks for commonly used passwords or strings of related words.  
                  The attacker has a list of related words and common passwords (known as a dictionary) and checks combinations until the correct password is found.  
                  Passwords such as “ThisIsMyPassword” are not recommended because they are commonly used and are likely to be included in an attacker's dictionary.
                  Also, passwords such as "GreenTreeOutsideGround" are not recommended because they contain realted words which can be successfully guessed using a dictionary attack.
                </p>
            </div>
        </div>
    );
};

export default Step2;