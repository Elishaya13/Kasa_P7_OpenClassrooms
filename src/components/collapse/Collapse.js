import React from 'react';
import { useState, useEffect } from 'react';
import './collapse.scss'



const Collapse = ({ title, arrow }) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        //code pour reduire ou fermer

    }, [open])


    return (

        <div className='Collapse'>
            <button className='Collapse__button' onClick={() => { setOpen(!open) }}>{title}</button>
            <img src={arrow} alt='fleche'></img>
        </div>


        // <div className='Collapse'>
        //     <p>{title}</p>
        //     <img src={arrow} alt='fleche'></img>

        // </div>
    );
};

export default Collapse;
