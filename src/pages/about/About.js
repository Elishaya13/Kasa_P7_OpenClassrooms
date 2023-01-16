import React from 'react';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import BANNER_ABOUT from '../../assets/images/banner_about.png';
import './about.scss'
import AboutBody from './aboutBody/AboutBody';

const About = () => {
    return (
        <div className='About'>
            <Header />
            <Banner banner={BANNER_ABOUT} />
            <AboutBody />
            <Footer />
        </div>
    );
};

export default About;