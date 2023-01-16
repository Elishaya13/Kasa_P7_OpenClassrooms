import React, { Fragment } from 'react';
import Banner from '../../components/banner/Banner';
import Gallery from './gallery/Gallery';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import BANNER_IMG from '../../assets/images/banner_img.png'
import './home.scss';


const Home = () => {
    const title = {
        lines: ["Chez vous,", " partout et ailleurs"]
    };


    return (
        <div className='Home'>
            <Header />
            <Banner banner={BANNER_IMG} text={title.lines.map((line, i) =>
                <Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                </Fragment>
            )} />
            <Gallery />
            <Footer />
        </div>

    );
};

export default Home;