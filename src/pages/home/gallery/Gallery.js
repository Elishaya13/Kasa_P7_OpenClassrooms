import React from 'react';
import Card from '../../../components/card/Card';
import apartments from '../../../datas/logements.json';
import './gallery.scss'

const Gallery = () => {
    return (
        <div className='Gallery'>
            <div className='Gallery__content'>
                {apartments.map(apart => (
                    <Card key={apart.id}
                        {...apart}
                    />
                ))}

            </div>
        </div>
    );
};

export default Gallery;