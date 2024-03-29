import React, { useState, useEffect } from 'react';
import apiAparts from '../../../services/apiAparts'
import Card from '../../../components/card/Card';
import './gallery.scss'

const Gallery = () => {
    const [aparts, setAparts] = useState([]);
    const [isData, setIsData] = useState(false);

    useEffect(() => {
        !isData &&
            apiAparts.getAparts().then((json) => {
                setAparts(json);
                setIsData(true);
            });
    }, [isData]);

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