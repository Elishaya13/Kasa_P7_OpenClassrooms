import React from 'react';
import './rating.scss'
import { IMAGES } from '../../datas/constants';
// import starsNumber from './starsNumber';

const Rating = ({ rating }) => {

    let maxRate = 5;
    let stars = [];

    // For each star
    for (let i = 1; i <= maxRate; i++) {
        // We compare with the note received, red image if it is less than or equal to the note otherwise gray
        let starImg = i <= rating ? IMAGES.RED_STAR_IMG : IMAGES.GREY_STAR_IMG
        // We push on the stars array the code to write with the good star img
        stars.push(<li key={i}><img src={starImg} alt="star icone"></img></li>)
    }

    return (

        <div className='Rating'>
            <div className='Rating__stars'>
                {stars}
                {/* {rating == 1 && starsNumber.OneStar()}
            {rating == 2 && starsNumber.TwoStars()}
            {rating == 3 && starsNumber.ThreeStars()}
            {rating == 4 && starsNumber.FourStars()}
            {rating == 5 && starsNumber.FiveStars()} */}

            </div>
        </div>
    )
}
export default Rating;