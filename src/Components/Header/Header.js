import React from 'react';
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
						}} className={props.animate ? 'animate' : ''}>{props.password}</h5>
				</div>
			</div>
		</div>
	);
};

export default Header;