import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <h1>Austin Godfrey</h1>
      <nav>
        <NavLink exact to="/AboutMe" activeClassName="active">About Me</NavLink>
        <NavLink to="/Portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/Resume" activeClassName="active">Resume</NavLink>
      </nav>
    </header>
  );
}

export default Nav;