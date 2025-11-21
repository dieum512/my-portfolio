import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => (
  <div className="header__socials">
    <a href="https://www.linkedin.com/in/dieumakonkwa/" target="blank" aria-label="LinkedIn Profile"><BsLinkedin /></a>
    <a href="https://github.com/dieum512/" target="blank" aria-label="Github Profile"><FaGithub /></a>
    <a href="https://twitter.com/dieumakonkw" target="blank" aria-label="Twitter Profile"><FaTwitter /></a>
  </div>
);

export default HeaderSocials;
