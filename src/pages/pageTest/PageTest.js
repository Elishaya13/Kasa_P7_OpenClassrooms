import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import Gallery2 from '../home/gallery/Gallery';

const PageTest = () => {

    return (
        <div>
            <Header />
            <Gallery2 />
            <Footer />
        </div>

        // <ul>
        //     {aparts && aparts.map((apart, index) => {
        //         return (
        //             <li key={index}>
        //                 {apart.title}
        //             </li>
        //         );
        //     })};
        // </ul>
    );
};

export default PageTest;