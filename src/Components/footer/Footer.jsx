import React from 'react';
import './Footer.css';
import {FiInstagram} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Farrel Adel Mohammad</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.instagram.com/farreladelm/" target="_blank"><FiInstagram/></a>
      <a href="https://www.facebook.com/farrel.adelmuhammad/" target="_blank"><BsFacebook/></a>
      <a href="https://twitter.com/farreladelm" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Farrel Adel Mohammad. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer