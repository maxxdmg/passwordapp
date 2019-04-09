import React from 'react';
import Icon from './git.png';
import './Header.css';
	
let Header = props => {
	return (
		<div style={{
				boxShadow: '0px 0px 2px 1px black',
				backgroundColor:'#5F4A62',
				color:'white'}}
				className='container-fluid fixed-top'>
			<div className='p-1 row'>
				<h1 className='font-weight-bold col-4 mt-2'> Password Anatomy </h1>
				<div style={{
					backgroundColor: 'white',
					color: 'black', 
					width: '300px',
					height: '40px',
					boxShadow: '0px 0px 2px 1px black'}} className='col-4 m-3 p-0 text-left'>
					<h5 style={{
						lineHeight: '40px'
						}} className={props.animate ? 'animate' : ''}>{props.password}<span className='cursor'>|</span></h5>
					
				</div>
				<div className='col-2' />
				<div className='col-1 mt-1'>
					<a href={'https://github.com/maxxdmg/passwordapp'}>
						<img src={Icon} alt={'github'} style={{'width': '64px', 'height': '64px'}} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;