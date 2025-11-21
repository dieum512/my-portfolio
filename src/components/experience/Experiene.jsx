import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experiene = () => (
  <section id="experience">
    <h5>What skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      {/* frontend experience */}
      <div>
        <h3>FrontEnd Developement</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Angular</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      {/* backend experience */}
      <div>
        <h3>BackEnd Developement</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>PostgreSQL</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Ruby</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Ruby on Rails</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experiene;
