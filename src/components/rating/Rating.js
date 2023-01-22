import React from 'react';
import './rating.scss'
import starsNumber from './starsNumber';
import redStarImg from './../../assets/images/redStar.png'
import greyStarImg from './../../assets/images/greyStar.png'


const Rating = ({ rating }) => {

    let maxRate = 5;
    let stars = [];

    // Pour chacune des étoiles
    for (let i = 1; i <= maxRate; i++) {
        // On compare avec la note reçue, image rouge si elle est inférieur ou égale à la note sinon grise
        let starImg = i <= rating ? redStarImg : greyStarImg
        // On pousse dans un tableau la ligne à afficher avec la bonne image
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