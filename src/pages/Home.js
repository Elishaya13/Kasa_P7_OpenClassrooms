import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Header />
            <div className='Home'>
                <Banner />
                <Card />
                <Card />
                <Card />
                Page Home !

            </div>
            <Footer /></>

    );
};

export default Home;