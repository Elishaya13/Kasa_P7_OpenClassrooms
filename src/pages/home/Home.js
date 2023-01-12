import React from 'react';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';


const Home = () => {
    return (
        <>
            <Header />
            <div className='Home'>
                <Banner />
                <Gallery />

            </div>
            <Footer />
        </>

    );
};

export default Home;