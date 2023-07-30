import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h1>Math Magician</h1>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quote">Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
