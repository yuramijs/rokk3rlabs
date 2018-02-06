import React from 'react';

import './Header.scss';
import logo from './logo.svg';

const Header = () =>
  <header className="header">
    <div className="header__logo">
      <img className="header__logo__image" src={logo} alt="logo"/>
    </div>
  </header>;

export default Header;