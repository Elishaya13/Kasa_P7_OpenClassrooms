import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiAparts from '../../services/apiAparts';

import './apart.scss'
import arrow_close from '../../assets/images/arrow_down.svg'
import Slideshow from '../../components/slideshow/Slideshow';
import TagLocation from '../../components/tagLocation/TagLocation';
import Rating from '../../components/rating/Rating';
import Collapse from '../../components/collapse/Collapse';


const Apart = () => {

    const { apartId } = useParams()

    const [apart, setApart] = useState(null);
    // const [apart, setapart] = useState(false);

    useEffect(() => {

        apiAparts.getApart(apartId)
            .then((json) => {
                setApart(json);

            }).catch(e => console.log(e));

    }, [apartId]);



    if (apart) {

        return (


            <div className='Apart'>

                <div className='Apart__slideshow'>

                    <Slideshow pictures={apart.pictures} alt={apart.description} />


                </div>

                <div className='Apart__name'>
                    <div className='Apart__name__title'>
                        <h2>{apart.title}</h2>
                        <p>{apart.location}</p>
                    </div>

                    <div className='Apart__name__tags'>
                        {apart.tags.map((item, index) =>
                            (<TagLocation key={index} tags={item} />))
                        }
                    </div>
                </div>

                <div className='Apart__host'>
                    <Rating />

                    <div className='Apart__host__profil'>
                        <p>{apart.host["name"]} </p>
                        <img src={apart.host["picture"]} alt={"proprietaire"}></img>
                    </div>

                </div>
                <div className='Apart__collaspe'>
                    <Collapse title="Description" arrow={arrow_close} text={apart.description} />


                    <Collapse title="Équipement" arrow={arrow_close} text={apart.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)} />


                </div>

            </div>


        );
    } else {
        return (
            <div> Truc qui tourne</div>
        )


    }


}
    ;

export default Apart;

