import React from 'react';
import './style.css'
import logo from './images/logo.png'

const Header = () => {
  return (
  <header className='header'>
      <img className="header__img" src={ logo } alt="NateCo logo"/>
      <h1 className='header__heading'>NateCo Employee Directory</h1>
  </header>)
}

export default Header;