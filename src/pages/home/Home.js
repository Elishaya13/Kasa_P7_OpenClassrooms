import React from 'react';
import Banner from '../../components/banner/Banner';
import Gallery from './gallery/Gallery';
import './home.scss';
import { STRINGS } from '../../strings/constants';
import { IMAGES } from '../../assets/images/images';


const Home = () => {

    return (
        <div className='home'>
            <Banner banner={IMAGES.BANNER_HOME} text={STRINGS.BANNER_TITLE} />
            <Gallery />
        </div>
    );
};

export default Home;