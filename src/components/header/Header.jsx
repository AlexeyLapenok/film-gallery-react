import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ReactIcon } from '../../assets/images/content/home.svg';
import './Header.css';


const Header = ({ isLoggedIn, setIsLoggedIn, userName }) => {
    const handleLogOut = () => {
        localStorage.setItem('isLoggedIn', false)
        setIsLoggedIn(false);
    };
    return (
        <header className="header">
            <h1 className="none">Film gallery</h1>
            <nav>
                <NavLink exact to="/" className="header_home"><ReactIcon alt="home" /></NavLink>
                {
                    isLoggedIn ?
                        <div>
                            <strong className="user-name">{userName}</strong>
                            <NavLink
                                className="header_sign"
                                onClick={handleLogOut}
                                exact
                                to="/login"
                            >SignOut
                            </NavLink>
                        </div>
                        : <NavLink className="header_sign" exact to="/login">SignIn</NavLink>
                }
            </nav>
        </header>
    );
};

export default Header;