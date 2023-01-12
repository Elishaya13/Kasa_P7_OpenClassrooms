import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './header.scss'

import RED_LOGO from '../../assets/images/redLogo.png'
import { HEADER_MENU_HOME, HEADER_MENU_ABOUT } from '../../datas/strings'


const Header = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <div className='Header'>
            <header>

                <div>
                    <img src={RED_LOGO} alt="red logo"></img>
                </div>
                <nav>
                    <ul>
                        {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
                        <li className={splitLocation[1] === "" ? "active" : ""}>
                            <Link to='/'>{HEADER_MENU_HOME}</Link>
                        </li>
                        <li className={splitLocation[1] === "about" ? "active" : ""}>
                            <Link to='/about'>{HEADER_MENU_ABOUT}</Link>
                        </li>

                    </ul>
                </nav>
            </header>

        </div>
    );
};

export default Header;