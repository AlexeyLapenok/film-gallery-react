import React from 'react';
import './Header.css';
import { ReactComponent as ReactIcon } from '../../assets/images/content/home.svg';


const Header = () => {
    return (
        <header className="header">
            <h1 className="none">Film gallery</h1>
            <a href="/" className="header_home"><ReactIcon alt="home" /></a>
            <div>

            </div>
        </header>
    );
};

export default Header;