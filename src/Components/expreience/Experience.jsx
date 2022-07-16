import React from 'react';
import './Experience.css';
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I've Learned</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>React JS</h4>
              <small className="text-light">Amateur</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>UI/UX Design</h4>
              <small className="text-light">Amateur</small>
              </div>
            </article>
          </div>
        </div>
        {/* BACK END */}
        <div className="experience__backend">
          <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>Express JS</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>Database</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>PostgreSQL</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience