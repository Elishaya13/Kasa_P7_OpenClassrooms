import React from 'react';
import Card from '../card/Card';
import apartments from '../../datas/logements.json';
import './gallery.scss'

const Gallery = () => {
    return (

        <div className='Gallery'>
            {apartments.map(apart => (
                <Card key={apart.id}
                    {...apart}
                />
            ))}

        </div>
    );
};

export default Gallery;