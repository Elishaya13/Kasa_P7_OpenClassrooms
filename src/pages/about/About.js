import React from 'react';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const About = (banner, text) => {
    return (
        <div>
            <Header />
            <Banner src={banner} />
            <Footer />
        </div>
    );
};

export default About;