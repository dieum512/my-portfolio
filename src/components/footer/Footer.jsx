import React from 'react';
import './footer.css';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const Footer = () => (
  <footer>
    <a href="#header" className="footer__logo">DIEUM</a>
    <ul className="permalinks">
      <li><a href="#header">Home</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/dieumakonkwa/" aria-label="LinkedIn profile" target="blank"><FaLinkedinIn /></a>
      <a href="https://twitter.com/dieumakonkw" aria-label="Twitter profile" target="blank"><FaTwitter /></a>
    </div>
    <div className="footer__copyright">
      <small>
        &copy; Dieum Akonkwa
        <AiOutlineHeart />
        . All rights reserved
      </small>
    </div>
  </footer>
);

export default Footer;
