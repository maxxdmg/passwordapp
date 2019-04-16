import React from 'react';

let Footer = props => {
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
                 <p style={{'textIndent': '40px'}} className='p-2 m-0'>A common method for creating
                  long passwords is to use a common phrase or
                  a string of related words, such as "ThisIsMyPassword" or "GreenTreeOutsideGround".  
                  While long passwords like these have an increased resistance
                  to traditional brute force attacks they are still vulnerable to a form of brute force 
                  attack known as a dictionary attack.   
                  A dictionary attack is a form of password cracking that checks for commonly 
                  used passwords or strings of related words.  
                  The attacker has a list of related words and common passwords, known as a dictionary,  
                  checking each entry in the dictionary until a correct password is found.  
                  Passwords such as “ThisIsMyPassword” are not recommended because they are commonly used and are 
                  likely to be included in an attacker's dictionary.
                  Also, passwords such as "GreenTreeOutsideGround" are not recommended because 
                  they contain realted words which can be successfully guessed using a dictionary attack. Meaning that
                  the odds somebody else used that password are increased.
                </p>
                <p style={{'textIndent': '40px'}} className='p-2 m-0'>
                  The contents of a dictionary are generally built by using passwords which have been already cracked. Once
                  a hacker breaks into a system with sensitive information they have been known to compile a list of all 
                  the passwords they found and put the list out into the internet for anybody to use, commonly known as a
                  password dump. People who build dictionaries to be used in 
                  dictionary attacks will use the most frequent passwords which are included in 
                  these lists. 
                </p>
            </div>
        </div>
    );
};

export default Footer;