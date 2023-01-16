import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import NotFound from '../pages/notFound/NotFound';
import PageTest from '../pages/pageTest/PageTest';


const PublicRouter = () => {
    return (


        <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/test' element={<PageTest />} />
            <Route path='*' element={<NotFound />} />
        </Routes>



    );
};

export default PublicRouter;