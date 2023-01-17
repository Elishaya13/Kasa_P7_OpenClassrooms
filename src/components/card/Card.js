import React from 'react';
import { Link } from 'react-router-dom';
import "./card.scss"

const Card = ({ id, cover, title }) => {
    return (
        <Link className='Card' to={'../logements/' + id} >
            <img
                src={cover}
                alt={'Photo of ' + title} />

            <h2 className='Card__title'>{title}</h2>
        </Link>
    );
};

export default Card;
