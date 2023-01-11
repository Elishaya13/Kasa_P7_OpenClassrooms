import React from 'react';
import BANNER_M from '../assets/images/banner_m.png'

const Banner = () => {
    return (
        <div className='Banner'>
            <img src={BANNER_M} alt='banner'></img>
            <p> Chez vous, <br />partout et ailleurs</p>

        </div>
    );
};

export default Banner;