import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import NotFound from '../pages/notFound/NotFound';
import Layout from '../pages/Layout';



const PublicRouter = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/apart:idApart' element={<About />} />

                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;