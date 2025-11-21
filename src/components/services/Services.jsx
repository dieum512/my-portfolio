import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => (
  <section id="services">
    <h5>What I offer</h5>
    <h2>Sercices</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>I develop the user interface.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>I create ux element interactions.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Web page development.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>I position your company brand.</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Web Developement</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>I develop the user interface.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>I transform concepts into fully functional web applications.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>I develop the Front-End of the webpage</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>I develop the Back-End of the webpage</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>I deliver dynamic and responsive web solutions</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Software Development</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>I craft solutions to challenges.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Web page development.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>I have a problem-solving approach</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>I ensure every project meets its objectives</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
