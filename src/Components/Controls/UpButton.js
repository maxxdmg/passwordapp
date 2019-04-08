import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const UpButton = props => {
	return (
    	<button 
        	className='col-12 btn btn-outline-dark' 
        	style={{'backgroundColor': '#5F4A62'}}
        	onClick={props.clicked} 
        	disabled={props.disabled} >
            <FaArrowUp />
        </button>
    );
};

export default UpButton;