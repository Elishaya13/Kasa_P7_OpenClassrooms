import React, { useState, useEffect } from 'react';
import './apart.scss'
import { useParams } from 'react-router-dom';
import apiAllAparts from '../../services/apiAllAparts';
import Banner from '../../components/banner/Banner';



const Apart = () => {

    const [aparts, setAparts] = useState([]);
    const [isMounted, setIsMounted] = useState(false)

    let { apartId } = useParams()

    useEffect(() => {
        !isMounted &&
            apiAllAparts.getAparts().then((json) => {
                setAparts(json);
                setIsMounted(true);
            });
    }, [isMounted]);

    const currentApart = aparts.filter(apart =>
        apart.id === apartId);



    return (
        <div className='Apart'>
            <div>
                {currentApart.map(apart => (

                    <Banner key={apart.id} banner={apart.cover} />

                ))}
                <p>{currentApart.title}</p>

            </div>


        </div>

    );
};

export default Apart;

