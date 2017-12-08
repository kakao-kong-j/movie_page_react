import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    return (
        <div>
            <div className="nav nav-pills flex-column lg flex-sm-row bg-dark">
                <NavLink exact to="/" className="px-5 mr-auto"id="logo">  </NavLink>
                <NavLink exact to="/" className="flex-sm-fill text-sm-center nav-link px-5 float-right align-self-center" activeClassName="nav-link active">Introduce</NavLink>
                <NavLink to="/MovieList" className="flex-sm-fill text-sm-center nav-link px-5 float-right align-self-center" activeClassName="nav-link active">MovieList</NavLink>
                <NavLink to="/board" className="flex-sm-fill text-sm-center nav-link px-5 float-right align-self-center" activeClassName="nav-link active">Board</NavLink>
                <NavLink to="/login" className="flex-sm-fill text-sm-center nav-link px-5 float-right align-self-center" activeClassName="nav-link active">Login</NavLink>
            </div>
        </div>
    );
};

export default Header;