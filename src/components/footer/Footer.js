import React from 'react';
import './footer.scss'
import BLACK_LOGO from '../../assets/images/blackLogo.png';


const Footer = () => {
    return (
        <div className='Footer'>
            <img src={BLACK_LOGO} alt="black logo"></img>
            <p>© 2023 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;