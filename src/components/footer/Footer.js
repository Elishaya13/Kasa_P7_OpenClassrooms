import React from 'react';
import './footer.scss'
import { IMAGES, STRINGS } from '../../datas/constants';

const Footer = () => {
    return (
        <div className='Footer'>
            <img src={IMAGES.BLACK_LOGO} alt="black logo"></img>
            <p>{STRINGS.COPYRIGHT}</p>
        </div>
    );
};

export default Footer;