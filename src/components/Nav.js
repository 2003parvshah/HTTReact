import React from 'react';
import {Routes , Route , Link , NavLink}  from "react-router-dom";
import {
  MDBIcon,
}
from 'mdb-react-ui-kit';

import './Nav.css'; // Importing CSS file
// import logo from './logo.png'; 
function Nav() {
  return (
    <>
      <header>
      <MDBIcon fas icon="scissors fa-3x" style={{ color: 'dark' }}/>
      <nav>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/courses" activeClassName="active">Courses</NavLink></li>
        <li><NavLink to="/blogs" activeClassName="active">blogs</NavLink></li>
        {/* <li><NavLink to="/" activeClassName="active">Contact</NavLink></li> */}
        <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
        {/* <img src={logo} alt="Logo" className="logo" /> Render your logo image */}
      </nav>
    </header>
    </>
  );
}

export default Nav;
