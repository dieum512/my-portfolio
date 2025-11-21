import React from 'react';
import { FaAward } from 'react-icons/fa';
import { ImFolderOpen, ImUsers } from 'react-icons/im';
import ME from '../../assets/IMG_2025.jpg';
import './about.css';

const About = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>1+ Year Working</small>
          </article>
          <article className="about__card">
            <ImFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>30+ Completed</small>
          </article>
          <article className="about__card">
            <ImUsers className="about__icon" />
            <h5>Collaboration</h5>
            <small>Good communicator</small>
          </article>
        </div>
        <p>
          I have completed the Microverse Full Stack Curriculum, an online training school
          where I have been coding 8 hours a day remotely with other developers and have
          learned the skills of leading, communication, and teamwork
        </p>
        <a href="#contact" className="btn btn-primary">Let us talk</a>
      </div>
    </div>
  </section>
);

export default About;
