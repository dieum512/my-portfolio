import React from 'react';
import RESUME from '../../assets/My Resume.pdf';

const CTA = () => (
  <div className="cta">
    <a href={RESUME} download className="btn">Download CV</a>
    <a href="#contact" className="btn btn-primary">Let us talk</a>
  </div>
);

export default CTA;
