import React from 'react';
import { useState } from 'react';
import './collapse.scss'

const Collapse = ({ title, arrow, text }) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (

        <div className='Collapse'>
            <div className='Collapse__container' onClick={handleClick}>
                <h3>{title}</h3>
                <img src={arrow} alt='fleche' className={open ? "arrow-up" : "arrow-down"}></img>
            </div>

            <div className='Collapse__textContent'>
                {open && <div className='Collapse__textContent_text'>
                    <p>{text}</p>
                </div>}
            </div>

        </div >

    );
};

export default Collapse;
