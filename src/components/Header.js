import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
            <NavLink to="/MovieList" className="item" activeClassName="active">MovieList</NavLink>
            <NavLink to="/board" className="item" activeClassName="active">Board</NavLink>
            <NavLink to="/login" className="item" activeClassName="active">Login</NavLink>
        </div>
    );
};

export default Header;