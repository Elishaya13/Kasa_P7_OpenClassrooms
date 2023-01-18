import React, { useState, useEffect } from 'react';
import './apart.scss'
import { useParams } from 'react-router-dom';
import apiAparts from '../../services/apiAparts';
import Slideshow from '../../components/slideshow/Slideshow';
import ApartProfil from './apartProfil/ApartProfil';

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

    return (


        <div className='Apart'>

            <div className='Apart__slideshow'>

                {isMounted && <Slideshow pictures={apart.pictures} alt={apart.description} />}
                {/* <Slideshow pictures={apart.pictures} alt={apart.description} /> */}

            </div>
            <div className='Apart__profil__container'>
                {/* 
                {apart.map(apart => (

                    <ApartBody key={apart.id} apartName={apart.title} />


                ))} */}
                <ApartProfil />

            </div>

        </div>

    );
};

export default Apart;

