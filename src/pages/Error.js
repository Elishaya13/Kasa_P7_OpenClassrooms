import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';



const Error = () => {
    return (
        <div className='error_container'>
            <Header />
            <p className="error_container_message_number">404</p>
            <p className="error_container_message">Oups! la page que vous demandez n'existe pas.</p>
            <p className="error_container_message"><Link to="/home" style={{ color: 'inherit' }}>Retourner sur la page d'accueil</Link></p>
            <Footer />
        </div>
    );
};

export default Error;