import React from 'react';
import Banner from '../../components/banner/Banner';
import AboutBody from './aboutBody/AboutBody';
import './about.scss'
import { IMAGES } from '../../datas/constants';


const About = () => {
    return (
        <div className='About'>
            <Banner banner={IMAGES.BANNER_ABOUT} />
            <AboutBody />
        </div>
    );
};

export default About;