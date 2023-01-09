import React from 'react';
import { Link } from 'react-router-dom';
import RED_LOGO from '../assets/images/redLogo.png'


const Header = () => {
    return (
        <div className='Header'>
            <header>

                <div>
                    <img src={RED_LOGO} alt="red logo"></img>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/home'>Acceuil</Link></li>
                        <li><Link to='/about'>A propos</Link></li>
                    </ul>
                </nav>
            </header>

        </div>
    );
};

export default Header;