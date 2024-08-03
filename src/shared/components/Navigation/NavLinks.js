import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import Button from '../FormElements/Button';
import './NavLinks.css';


const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">My Posts</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">Post</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Login/Signup</NavLink>
        </li>
      )}
      {auth.isLoggedIn &&<li><Button onClick = {auth.logout} className= "logout__btn">Logout</Button></li> }
    </ul>
  );
};

export default NavLinks;
