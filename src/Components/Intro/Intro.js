import React from 'react';

let Intro = props => {
    return (
        <div style={{ backgroundColor: '#72AE5F', marginTop: '120px'}}
            className='container p-0'>
            <div className='text-left p-3'>
                <h2 className='font-weight-bold'> Anatomy of a Password! </h2>
            </div>
            <div className='w-100' />
            <div style={{ backgroundColor: '#72D75F', width: '100%', padding: '2px', paddingTop: '12px', height: '500px'}} >
                <p style={{'textIndent': '40px'}} className='p-3'>The art of Password creation becomes more and more critical as society 
                	is increasingly digitized. Lacking good password practices has greater consequences now than
                	ever before, only growing as time goes on. Good password practices and 
                	where they come from will be dissected throughout this short semi-interactive site, so that
                	readers will not only know the standards of good password practice but also have the innerworkings
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