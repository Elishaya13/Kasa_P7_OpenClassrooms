import React from 'react';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import BANNER_APART from '../../assets/images/banner_apart'

const Apart = () => {
    return (
        <div className='Apart'>
            <Header />
            <Banner banner={BANNER_APART} />
            <Footer />
        </div>

    );
};

export default Apart;