import React from 'react';
	
let Header = props => {
	return (
		<div style={{
				borderBottom:'3px solid black',
				backgroundColor:'#5F4A62',
				color:'white'}}
				className='container-fluid fixed-top'>
			<div className='text-center p-3'>
				<h1 className='font-weight-bold'> Password Anatomy </h1>
				<div className='w-100' />
				<div className='row justify-content-center'>
					<div style={{
						backgroundColor: 'white',
						color: 'black', 
						width: '300px',
						height: '40px',
						boxShadow: '0px 0px 1px 3px black'}} className='col-4 m-3 pl-2 text-left'>
						<h5 style={{
							lineHeight: '40px'
							}} className='m-0'>Password</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;