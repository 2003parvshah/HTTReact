import React from 'react';
import {Routes , Route , Link , NavLink}  from "react-router-dom";

import './Nav.css'; // Importing CSS file
// import logo from './logo.png'; 
function Nav() {
  return (
    <>
      <header>
      <nav>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/courses" activeClassName="active">Courses</NavLink></li>
        {/* <li><NavLink to="/" activeClassName="active">Contact</NavLink></li> */}
        <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
        {/* <img src={logo} alt="Logo" className="logo" /> Render your logo image */}
      </nav>
    </header>
    </>
  );
}

export default Nav;
