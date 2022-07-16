import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6lc6uer', 'template_gfwibdb', form.current, '6j03ClEXEWU81Z0ey')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contacts">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>farrel.adel@gmail.com</h5>
            <a href="mailto:farrel.adel@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@farreladelm</h5>
            <a href="https://www.instagram.com/farreladelm/" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>082131401640</h5>
            <a href="https://wa.me/6282131401640" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* CONTACT FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" id="email" placeholder='Your Email' required/>
          <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact