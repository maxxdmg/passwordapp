import React from 'react';

let Step4 = props => {
    let cssClass = 'container p-0';
    if (props.transition)
        cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#BF2DC7', marginTop: '50px', zIndex: '5'}}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'>Strong Passwords</h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#D361DB', width: '100%', padding: '3px', paddingTop: '12px', height: '500px' }} >
                <p style={{ 'textIndent': '40px' }} className='p-2 m-0'>
                    The most secure passwords take into account all of the practices discussed on this website, making them resistant to various forms
                    of password cracking while also being easy for the user to remember.
                    </p>
                <ul className='p-4 m-0'>
                    <li style={{ 'textIndent': '20px' }} > They are long, which makes them resistant to traditional brute force attacks.</li>
                    <li style={{ 'textIndent': '20px' }} > They don't consist of common phrases or strings of related words, making them resistant to dictionary attacks.</li>
                    <li style={{ 'textIndent': '20px' }} > They also don't use common substitiutions or alternate spellings,
                        making them resistant to attacks which check for these minor variations.</li>
                </ul>

                <p style={{ 'textIndent': '40px' }} className='p-2 m-0'>
                    For those wanting additional security, passwords can be made even stronger by adding numbers and symbols. This forces an attacker to check the entire character
                    space when trying to guess your password.  The previous password "viralcoralpass" only contains letters, meaning there are only 52 possible choices 
                    that need to be checked for each character in the password.  Adding numbers and symbols raises the number of possible choices to 
                    95, making the password even more difficult to crack!
                    </p>

                                    <p style={{ 'textIndent': '40px' }} className='p-2 m-0'>
                    An example of a secure password which employs all of these practices is "2viral_coralpass35".  This password is
                    resistant to dictionary attacks because it consists of random, unrelated words.  It is also resistant to traditional brute force
                    attacks because of its length.  An 18 character password such as this would take roughly 4 trillion years to crack using brute
                    force on a modern desktop PC.
                    </p>
            </div>
        </div>
    );
};

export default Step4;