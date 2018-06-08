import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants';

const Nav = () =>
  <nav>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.ABOUT}>About</Link>
    </li>
    <li>
      <Link to={routes.CONTACT}>Contact</Link>
    </li>
  </nav>

export default Nav;
