import React from 'react';
import './About.css';
import me from '../../assets/me-about.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {IoMdSchool} from 'react-icons/io'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Programming</small>
            </article>
            <article className="about__card">
              <IoMdSchool className='about__icon'/>
              <h5>College</h5>
              <small>3.96 GPA</small>
            </article>
          </div>

          <p>
          3rd year computer science student with 3.9 GPA. Udemy fullstack developer certified and Freecodecamp responsive web design certified. Very passionate in responsive web design. I'm a creative and curious person that love to learn new things everyday. Seeking real-life experience on the tech industry.
          </p>

          <a href="#contacts" className="btn btn-primary">Let's Work</a>
        </div>

      </div>
    </section>
  )
}

export default About