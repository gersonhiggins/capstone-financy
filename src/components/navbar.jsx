import React from 'react';
import { NavLink } from 'react-router-dom';
import micro from '../assets/microphone.png';
import config from '../assets/config.png';

const Navbar = () => (
  <nav>
    <ul>
      <li className="nav">
        <NavLink to="/capstone-financy" exact>
          Home
        </NavLink>
        <h1>Company Financy Statement</h1>
        <div>
          <img src={micro} className="micro" alt="microphone" />
          <img src={config} className="config" alt="config" />
        </div>
      </li>
    </ul>
  </nav>
);

export default Navbar;
