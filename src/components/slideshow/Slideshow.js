import React, { useState } from 'react';
import './slideshow.scss'
import ARROW_BACK from '../../assets/images/arrow_back.png'
import ARROW_FOREWARD from '../../assets/images/arrow_forward.png'

const Slideshow = ({ pictures, alt }) => {

    const [index, setIndex] = useState(0)
    const pictureNbr = pictures.length;


    const handleClickSlideLeft = () => {
        // quand je clic sur la fleche gauche change l'image (index-1)
    }
    const handleClickSlideRight = () => {
        // quand je clic sur la fleche droite change l'image (index+1)
    }

    return (
        <div className='Slideshow'>
            {/* <img src={pictures[index]} alt={alt}></img> */}
            <div className='Slideshow__arrows'> {pictureNbr > 1 && <img className='arrow_back' src={ARROW_BACK}></img>}
                {pictureNbr > 1 && <img className='arrow_forward' src={ARROW_FOREWARD}></img>}</div>

            {<span>{index + 1}/{pictureNbr}</span>}


        </div>
    );
};

export default Slideshow;