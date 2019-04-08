import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const DownButton = props => {
    return (
        <button className='col-12 btn btn-outline-dark' style={{'backgroundColor': '#5F4A62'}}
        	onClick={props.clicked} >
            <FaArrowDown />
        </button>
    );
};

export default DownButton;