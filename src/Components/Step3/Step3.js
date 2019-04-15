import React from 'react';

let Step3 = props => {
    let cssClass = 'container p-0';
    if (props.transition)
        cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#1C7AD8', marginTop: '50px', zIndex: 5}}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'>Substitutions & Alternate Spellings</h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#4A9BE7', width: '100%', padding: '3px', paddingTop: '12px', height: '500px' }} >
                <p style={{ 'textIndent': '40px' }} className='p-2 m-0'>
                    A common error when trying to create a secure password is simply replacing certain letters in the
                    password with numbers or symbols that look similar.  For example, one might change "ThisIsMyPassword"
                    to "ThisIsMyPa55word".  However, these passwords are not secure because many dictionary attacks also
                    check for these types of substitutions.
                </p>
                <p style={{ 'textIndent': '40px' }} className='p-2 m-0'>
                    Another common error is to intentionally misspell or abbreviate a word.
                    For example, one might change the word “Quick” in their password to “Kwik”.  However, dictionary attacks
                    often check for these variations, so simply changing the spelling of a word is not enough to create a secure
                    password.  Furthermore, substituting letters or misspelling words can make a password difficult to remember,
                    so it is not a recommended practice.           
                </p>
				<p style={{ 'textIndent': '40px' }} className='p-2 m-0'>
					These types of changes don't add a meaninful security to your password, while making it harder to remember. Having passwords that utilize these techniques aren't weaker than ones that don't, but you use them at your own inconvenience.
				</p>]
            </div>
        </div>
    );
};

export default Step3;