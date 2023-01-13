import React from 'react';
import ErrorBody from '../../components/errorBody/ErrorBody';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './notFound.scss'



const NotFound = () => {
    return (



        <div className='error_container'>
            <Header />

            <ErrorBody />

            <Footer />

        </div>


    );
};

export default NotFound;