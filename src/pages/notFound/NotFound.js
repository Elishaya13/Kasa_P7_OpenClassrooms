import React from 'react';
import NotFoundBody from './notFoundBody/NotFoundBody';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './notFound.scss'



const NotFound = () => {
    return (



        <div className='error_container'>
            <Header />

            <NotFoundBody />

            <Footer />

        </div>


    );
};

export default NotFound;