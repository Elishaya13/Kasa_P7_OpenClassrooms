import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';



const Error = () => {
    return (
        <>
            <Header />

            <div className='error_container'>

                <p className="error_container_message_number">404</p>
                <p className="error_container_message">Oups! la page que<br /> vous demandez n'existe pas.</p>
                <p className="error_container_message_back"><Link to="/home" >Retourner sur la page d'accueil</Link></p>



            </div>
            <Footer />
        </>
    );
};

export default Error;