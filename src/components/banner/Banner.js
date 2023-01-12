import React from 'react';
import BANNER_M from '../../assets/images/banner_m.png'
import './banner.scss'

const Banner = () => {
    return (
        <div className='Banner'>
            <img src={BANNER_M} alt='banner'></img>
            <h1> Chez vous, <br />partout et ailleurs</h1>

        </div>
    );
};

export default Banner;