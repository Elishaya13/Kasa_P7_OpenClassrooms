import React from 'react';
import Collapse from '../collapse/Collapse';
import './aboutBody.scss'
import arrow_close from '../../assets/images/arrow_down.svg'



const AboutBody = () => {
    return (
        <div className='AboutBody'>


            <Collapse
                arrow={arrow_close}
                title="Fiabilité"
            />
            <hr />
            <Collapse
                arrow={arrow_close}
                title="Respect"
            />
            <hr />
            <Collapse
                arrow={arrow_close}
                title="Service"
            />
            <hr />
            <Collapse
                arrow={arrow_close}
                title="Sécurité"
            />


        </div>
    );
};

export default AboutBody;