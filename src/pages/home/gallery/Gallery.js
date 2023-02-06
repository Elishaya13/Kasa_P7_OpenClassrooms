import React, { useState, useEffect } from 'react';
import apiAparts from '../../../services/apiAparts'
import Card from '../../../components/card/Card';
import './gallery.scss'

const Gallery = () => {
    const [aparts, setAparts] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        !isMounted &&

            apiAparts.getAparts().then((json) => {
                setAparts(json);
                setIsMounted(true);
            });
    }, [isMounted]);

    return (
        <div className='gallery'>
            <div className='gallery__content'>
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