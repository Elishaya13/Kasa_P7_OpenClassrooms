import React, { useState, useEffect } from 'react';
import Card from '../../../components/card/Card';
import api from '../../../services/api'
import './gallery.scss'

const Gallery = () => {
    const [aparts, setAparts] = useState([]);
    const [isMounted, setIsMounted] = useState(false)


    useEffect(() => {
        !isMounted &&
            api.getAparts().then((json) => {
                setAparts(json);
                setIsMounted(true);
            });
    }, [isMounted]);



    return (
        <div className='Gallery'>
            <div className='Gallery__content'>
                {aparts && aparts.map(apart => (
                    <Card key={apart.id}
                        {...apart}
                    />
                ))}

            </div>
        </div>
    );
};

export default Gallery;