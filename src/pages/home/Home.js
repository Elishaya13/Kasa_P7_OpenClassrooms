import React from 'react';
import Banner from '../../components/banner/Banner';
import Gallery from './gallery/Gallery';
import './home.scss';
import { IMAGES, STRINGS } from '../../datas/constants';


const Home = () => {

    return (
        <div className='Home'>
            <Banner banner={IMAGES.BANNER_HOME} text={STRINGS.BANNER_TITLE} />
            <Gallery />
        </div>
    );
};

export default Home;