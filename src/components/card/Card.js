import React from 'react';
import { Link } from 'react-router-dom';
import "./card.scss"



const Card = ({ id, cover, title }) => {
    return (
        <Link className='Card' to={'../logements/' + id} >
            <img
                src={cover}
                alt={'Photo of ' + title} />

            <p>{title}</p>

        </Link>
    );
};

export default Card;

// Compostant card
// id + title + cover from logement