import React, { useState } from 'react';
import './slideshow.scss'
import ARROW_BACK from '../../assets/images/arrow_back.png'
import ARROW_FOREWARD from '../../assets/images/arrow_forward.png'

const Slideshow = ({ pictures, alt }) => {

    const [currentIndex, setIndex] = useState(0)
    const lastIndex = pictures.length - 1;

    const handleClickSlideLeft = () => {
        // Si je suis a index 0 , alors isFirstSlide = vrai , je suis sur la première slide
        const isFirstSlide = currentIndex === 0;
        // Si Je suis à la premiere slide, alors je vais à la dernière image de mon tableau , sinon je recule de 1
        const newIndex = isFirstSlide ? lastIndex : currentIndex - 1;
        setIndex(newIndex)

    }
    const handleClickSlideRight = () => {

        const isLastSlide = currentIndex === lastIndex;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setIndex(newIndex);

    }

    return (
        <div className='Slideshow' style={{ backgroundImage: `url("${pictures[currentIndex]}")` }}>


            <div className='Slideshow__arrows'>
                {pictures.length > 1 && <img className='arrow_back' src={ARROW_BACK} alt="flèche de défilement" onClick={handleClickSlideLeft}></img>}
                {pictures.length > 1 && <img className='arrow_forward' src={ARROW_FOREWARD} alt="flèche de défilement" onClick={handleClickSlideRight}></img>}
            </div>

            {<span>{currentIndex + 1}/{pictures.length}</span>}


        </div>
    );
};

export default Slideshow;