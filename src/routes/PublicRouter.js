import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error'

const PublicRouter = () => {
    return (
        <div className='PublicRouter'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default PublicRouter;