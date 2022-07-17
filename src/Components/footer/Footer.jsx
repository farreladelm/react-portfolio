import React from 'react';
import './Footer.css';
import {FiInstagram} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Farrel Adel Mohammad</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.instagram.com/farreladelm/" target="_blank" rel="noreferrer"><FiInstagram/></a>
      <a href="https://www.facebook.com/farreladelm/" target="_blank" rel="noreferrer"><BsFacebook/></a>
      <a href="https://twitter.com/farreladelm" target="_blank" rel="noreferrer"><BsTwitter/></a>
      <a href="https://www.linkedin.com/in/farreladelm/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Farrel Adel Mohammad. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer