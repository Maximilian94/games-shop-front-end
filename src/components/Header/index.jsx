import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Search from './Search';
import Cart from './Cart';

import Logo from '../../images/SUPERA-BRANCO.svg';

function Header() {
  const logo = () => (
    <Link to="/">
      <img src={Logo} alt="logo" className="logo" />
    </Link>
  );

  return (
    <header>
      {logo()}
      <Search />
      <Cart />
    </header>
  );
}

export default Header;
