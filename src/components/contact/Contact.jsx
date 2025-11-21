import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_79ss28o', 'template_8kdrfwn', form.current, 'UMcEGooROpm7jA0Va');

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>akonkwadieum222@gmail.com</h5>
            <a href="mailto:akonkwadieum222@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BiLogoLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Dieum Akonkwa</h5>
            <a href="https://www.linkedin.com/in/dieumakonkwa/" target="_blank" rel="noreferrer">Connect with me on LinkedIn</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+243 826 739 987</h5>
            <a href="https://api.whatsapp.com/send?phone=+243826739987" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
