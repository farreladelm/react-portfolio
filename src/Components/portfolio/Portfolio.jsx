import React from 'react';
import './Portfolio.css';
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio5.png'
import img3 from '../../assets/portfolio3.png'

const portfolioData = [
  {
    id: 1,
    image: img1,
    title: "Udemy Smart Brain Final Project using React and Express.js",
    github: ""
  },
  {
    id: 2,
    image: img2,
    title: "Figma Mobile Application Design for CAKU App",
    github: "https://www.figma.com/proto/ek1XadtCs45kiEwyLe5YHm/wireframe-Catatan-Keuangan?scaling=scale-down&page-id=0%3A1&starting-point-node-id=272%3A2043&show-proto-sidebar=1&node-id=205%3A362"
  },
  {
    id: 3,
    image: img3,
    title: "My First Portfolio using HTML, CSS, and Javascript",
    github: "https://first-portofolio.netlify.app/"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Details</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio