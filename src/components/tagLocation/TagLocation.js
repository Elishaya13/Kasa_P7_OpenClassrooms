import React from 'react';
import './tagLocation.scss'

const TagLocation = ({ tags }) => {

    return (
        <div className='TagLocation'>

            <p>{tags}</p>
        </div>
    );
};

export default TagLocation;