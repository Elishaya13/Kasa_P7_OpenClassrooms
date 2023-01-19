import React, { useState, useEffect } from 'react';
import './apart.scss'
import { useParams } from 'react-router-dom';
import apiAparts from '../../services/apiAparts';
import Slideshow from '../../components/slideshow/Slideshow';
import TagLocation from '../../components/tagLocation/TagLocation';
import Rating from '../../components/rating/Rating';
import Collapse from '../../components/collapse/Collapse';
import arrow_close from '../../assets/images/arrow_down.svg'

const Apart = () => {

    let { apartId } = useParams()

    const [apart, setApart] = useState({});
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        !isMounted &&
            apiAparts.getApart(apartId)
                .then((json) => {
                    setApart(json);
                    setIsMounted(true);
                }).catch(setApart({}));

    }, [isMounted, apartId]);

    // useEffect(() => {
    //     getData()

    // }, [])

    // const getData = async () => {
    //     const json = await apiAparts.getApart(apartId);
    //     setApart(json)

    // }

    const tagsArray = apart.tags
    const stuffsArray = apart.equipments
    // const stuffs = stuffsArray.map((equipement, index) => <li key={index}>{equipement}</li>)





    return (


        <div className='Apart'>

            <div className='Apart__slideshow'>

                {isMounted && <Slideshow pictures={apart.pictures} alt={apart.description} />}
                {/* <Slideshow pictures={apart.pictures} alt={apart.description} /> */}

            </div>

            <div className='Apart__name'>
                <div className='Apart__name__title'>
                    <h2>{apart.title}</h2>
                    <p>{apart.location}</p>
                </div>

                {/* <div className='Apart__name__tags'> {
                    tagsArray.map((item, index) => (
                        <TagLocation key={index} tags={item} />
                    ))
                }
                </div> */}
                <div className='Apart__name__tags'>
                    {isMounted &&
                        tagsArray.map((item, index) => (
                            <TagLocation key={index} tags={item} />
                        ))
                    }
                </div>
            </div>

            <div className='Apart__host'>
                <Rating />

                <div className='Apart__host__profil'>
                    {isMounted && <p>{apart.host["name"]} </p>}
                    {isMounted && <img src={apart.host["picture"]}></img>}

                </div>

            </div>
            <div className='Apart__collaspe'>
                {isMounted && <Collapse title="Description" arrow={arrow_close} text={apart.description} />}


                {isMounted && <Collapse title="Équipement" arrow={arrow_close} text={apart.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)} />}


            </div>

        </div>


    );
}
    ;

export default Apart;

