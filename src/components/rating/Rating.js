import React, { useEffect, useState } from 'react';
import './rating.scss'
import starsNumber from './starsNumber';


const Rating = ({ rating }) => {

    const [nbrRate, setNbrRate] = useState("0")

    useEffect(() => {

        setNbrRate(rating)

    }, []);

    return (

        <div className='Rating'>
            {nbrRate == 1 && starsNumber.OneStar()}
            {nbrRate == 2 && starsNumber.TwoStars()}
            {nbrRate == 3 && starsNumber.ThreeStars()}
            {nbrRate == 4 && starsNumber.FourStars()}
            {nbrRate == 5 && starsNumber.FiveStars()}
        </div>
    )

}





export default Rating;