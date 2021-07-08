import React from 'react';
import './Header.css';
import { ReactComponent as ReactIcon } from '../../assets/images/content/home.svg';

const Header = () => {
    return (
        <header className="header">
            <h1 className="none">Film gallery</h1>
            <a href="index.html" className="header_home"><ReactIcon alt="home" /></a>
            <a href="auth.html" className="header_sign">Sign In/Sign Up</a>
        </header>
    );
};

export default Header;