import React from 'react';

let Step3 = props => {
    let cssClass = 'container p-0';
    if (props.transition)
        cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#1C7AD8', marginTop: '50px', zIndex: 5}}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'>Alternate Spelling & Wordlist Substitutions</h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#4A9BE7', width: '100%', padding: '3px', paddingTop: '12px', height: '500px' }} >
                <p style={{ 'textIndent': '40px' }} className='p-2 m-0'>
                    A common error when trying to create a secure password is simply replacing certain letters in the
                    password with numbers or symbols that look similar.  For example, one might change "ThisIsMyPassword"
                    to "ThisIsMyPa55word".  However, these passwords are not secure because many dictionary attacks also
                    check for these types of substitutions with a tecnique called wordlist substitution.
                </p>
                <p style={{ 'textIndent': '40px' }} className='p-2 m-0'>
                    Another common error is to intentionally misspell or abbreviate a word.
                    For example, one might change the word “Quick” in their password to “Kwik”.  However, dictionary attacks
                    often check for these variations, so simply changing the spelling of a word is not enough to create a secure
                    password. Most modern password cracking software will attempt to try variations of common passwords found in dictionaries which were
                    introduced previously. Remember that password cracking essentially boils down to a ton of guess and checking, so it is trivial for a password
                    cracking program to go through and try different variations of a common phrase. For instance a malicious actor could set up their program to 
                    try substituting a '$' for every word which contains an 's'. This cracking technique is referred to as 'wordlist substitution'. Just like with dictionary attacks
                    a list is created by hackers who have viewed tons of leaked user passwords. But instead of just compiling common passwords they create a list of common word substitutions 
                    that people use in their passwords. Changing a letter or phrase to something which is essentially the same thing only gives
                    a false sense of security and nothing more. Furthermore, substituting letters or misspelling words can make a password difficult to remember without adding any
                    protection.
                </p>
            </div>
        </div>
    );
};

export default Step3;