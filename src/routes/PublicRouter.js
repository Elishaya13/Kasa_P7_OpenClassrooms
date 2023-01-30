import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import NotFound from '../pages/notFound/NotFound';
import Layout from '../pages/Layout';
import Apart from '../pages/apart/Apart';



const PublicRouter = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/logements/:apartId' element={<Apart />}
                />
                <Route path='/error' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;