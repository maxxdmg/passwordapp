import React from 'react';

let Footer = props => {
    let cssClass = 'container p-0';
    if (props.transition)
        cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#6D119C', marginTop: '50px', zIndex: 5}}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Footer </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#B758F3', width: '100%', padding: '2px', height: '500px' }} >
                <h3 className='p-2 m-0'>Sources</h3>
                <ul>
                  <li>https://www.npr.org/sections/alltechconsidered/2017/08/14/543434808/forget-tough-passwords-new-guidelines-make-it-simple</li>
                  <li>http://www.oxid.it/ca_um/topics/brute-force_password_cracker.htm</li>
                  <li>https://www.techopedia.com/definition/1774/dictionary-attack </li>
                  <li>https://bugcharmer.blogspot.com/2012/06/how-long-should-passwords-be.html</li>
                  <li>https://oss.org/ios/set-a-complex-iphone-password/</li>
                  <li>https://lmgsecurity.com/password-cracking-custom-wordlists/</li>
                </ul>
                <p className='p-2 m-0'>
                  Max T - Marcus P - George - Nate P
                </p>
                <p className='p-2 m-0'>
                  MTH-312
                </p>
            </div>
        </div>
    );
};

export default Footer;