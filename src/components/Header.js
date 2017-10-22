import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
            <NavLink to="/Introduce" className="item" activeClassName="active">Introduce</NavLink>
            <NavLink to="/movielist" className="item" activeClassName="active">Movie List</NavLink>
            <NavLink to="/login" className="item" activeClassName="active">Login</NavLink>
        </div>
    );
};

export default Header;