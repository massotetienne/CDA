import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/"activeClassName="nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="/news"activeClassName="nav-active">
                News
            </NavLink>
            <NavLink exact to="/a-propos"activeClassName="nav-active">
              A propos
            </NavLink>
            <NavLink exact to="/meteo"activeClassName="nav-active">
              Méteo
            </NavLink>
            
        </div>
    ); 
};

export default Navigation;