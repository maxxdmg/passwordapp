import React from 'react';

let Intro = props => {
    let cssClass = 'container p-0';
    if (props.transition)
    	cssClass += ' ' + props.transition;
    return (
        <div style={{ backgroundColor: '#CE3B44', marginTop: '120px'}}
            className={cssClass}>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Anatomy of a Password! </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#E64B50', width: '100%', padding: '2px', paddingTop: '12px', height: '500px'}} >
                <p style={{'textIndent': '40px'}} className='p-3'>The art of Password creation becomes more and more critical as society 
                	is increasingly digitized. The consequences of lacking good password pratices are become more dire as the average
                	person is lives more of their life online. This short semi-interactive site will dissect good password practices and
                	explain where they originate. Readers will not only know the standards of good password practice but also have the innerworkings
                	of password cracking demystified. This site is not a lecture but a walkthrough of the 
                	anatomy of a password!
                </p>

                <p style={{'textIndent': '40px'}} className='pl-3 pt-0 pr-3 pb-3'>Take a look at the 'password' box
                at the top of the site. After each password practice is discussed the box will change 
                to reflect the topic covered. Watch as the example password blooms from insecurity to competency!
                </p>
                
            </div>
        </div>
    );
};

export default Intro;