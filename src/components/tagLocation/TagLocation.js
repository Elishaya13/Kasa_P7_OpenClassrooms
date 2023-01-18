import React from 'react';
import './tagLocation.scss'

const TagLocation = ({ tags }) => {

    //const test = tags.map(tag => (<p> {tag} </p>);
    //const tagArray = tags

    return (

        <div className='TagLocation'>

            <p>{tags}</p>
        </div>
    );
};

export default TagLocation;