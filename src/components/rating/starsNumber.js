import React from 'react';
import redStarImg from './../../assets/images/redStar.png'
import greyStarImg from './../../assets/images/greyStar.png'

const starsNumber = () => {

    const OneStar = () => {
        return (
            <div className='Rating__stars'>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={greyStarImg} alt="star icone"></img></li>
                <li><img src={greyStarImg} alt="star icone"></img></li>
                <li><img src={greyStarImg} alt="star icone"></img></li>
                <li><img src={greyStarImg} alt="star icone"></img></li>
            </div>
        )
    }

    const TwoStars = () => {
        return (
            <div className='Rating__stars'>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={greyStarImg} alt="star icone"></img></li>
                <li><img src={greyStarImg} alt="star icone"></img></li>
                <li><img src={greyStarImg} alt="star icone"></img></li>
            </div>
        )
    }
    const ThreeStars = () => {
        return (
            <div className='Rating__stars'>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={greyStarImg} alt="star icone"></img></li>
                <li><img src={greyStarImg} alt="star icone"></img></li>
            </div>
        )
    }
    const FourStars = () => {
        return (
            <div className='Rating__stars'>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={greyStarImg} alt="star icone"></img></li>
            </div>
        )
    }
    const FiveStars = () => {
        return (
            <div className='Rating__stars'>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={redStarImg} alt="star icone"></img></li>
                <li><img src={redStarImg} alt="star icone"></img></li>
            </div>
        )
    }

    return {
        OneStar, TwoStars, ThreeStars, FourStars, FiveStars
    };


}

export default starsNumber();