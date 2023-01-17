import React from 'react';
import Banner from '../../components/banner/Banner';
import AboutBody from './aboutBody/AboutBody';
import './about.scss'
import BANNER_ABOUT from '../../assets/images/banner_about.png';



const About = () => {
    return (
        <div className='About'>

            <Banner banner={BANNER_ABOUT} />
            <AboutBody />

        </div>
    );
};

export default About;