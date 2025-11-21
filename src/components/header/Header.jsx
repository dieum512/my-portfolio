import React from 'react';
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';
import Me from '../../assets/Image Plus-john-23-10-22-09-15-56 1.png';

const Header = () => (
  <header id="header">
    <div className="container header__container">
      <h5>Hello I am</h5>
      <h1>Dieum Akonkwa</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />

      <div className="me">
        <img src={Me} alt="Dieum" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>

      <HeaderSocials />
    </div>
  </header>
);

export default Header;
