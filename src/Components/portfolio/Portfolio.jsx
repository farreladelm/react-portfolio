import React from 'react';
import './Portfolio.css';
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio5.png'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/portfolio4.png'
import img5 from '../../assets/portfolio6.png'

const portfolioData = [
  {
    id: 1,
    image: img1,
    title: "Chatbot Used for Helping Small Businesses Sell Their Products",
    github: "https://app.smojo.org/farreladelm/TudungSaji"
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
  },
  {
    id: 4,
    image: img4,
    title: "Chatbot Used for Helping Small Businesses Sell Their Products",
    github: "https://app.smojo.org/farreladelm/foosh-bot"
  },
  {
    id: 5,
    image: img5,
    title: "MERN Fullstack app that can do CRUD on react with Redux",
    github: "https://farrels-memories.netlify.app/"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Project</h5>
      <h2>Project</h2>

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
                <a href={github} className='btn' target='_blank' rel="noreferrer">Details</a>
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