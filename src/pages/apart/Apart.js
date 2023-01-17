import React, { useState, useEffect } from 'react';
import './apart.scss'
import { useParams } from 'react-router-dom';
import apiAparts from '../../services/apiAparts';
import Slideshow from '../../components/slideshow/Slideshow';
//import Banner from '../../components/banner/Banner';
import ApartBody from './apartBody/ApartBody';

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

    }, [isMounted]);

    return (


        <div className='Apart'>

            <div className='Appart__slideshow'>

                {isMounted && <Slideshow pictures={apart.pictures} alt={apart.description} />}
                {/* <Slideshow pictures={apart.pictures} alt={apart.description} /> */}

            </div>
            <div className='Appart__body__container'>
                {/* 
                {apart.map(apart => (

                    <ApartBody key={apart.id} apartName={apart.title} />


                ))} */}

            </div>

        </div>

    );
};

export default Apart;

