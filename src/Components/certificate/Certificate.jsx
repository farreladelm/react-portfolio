import React from 'react'
import './Certificate.css'
import udemy from '../../assets/udemy-certificate.png'
import freecodecamp from '../../assets/freeCodeCamp-sertification.png'

const certification = [
    {
        title: "Fullstack Web Developer",
        company: "Udemy",
        date: "July 2022",
        img: udemy,
        link: "https://www.udemy.com/certificate/UC-ce80a6e3-c5a6-41ce-8cce-56df07f7369a/",
    },
    {
        title: "Responsive Web Design",
        company: "Freecodecamp",
        date: "July 2022",
        img: freecodecamp,
        link: "https://www.freecodecamp.org/certification/farreladelm/responsive-web-design",
    }
]

const Certificate = () => {
  return (
    <section id="certificate">
        <h5>Some of my</h5>
        <h2>Certification</h2>
        <div className="container certificate__container">
            <div className="card__container">
                {
                    certification.map((certificate) => {
                        return (
                            <a href={certificate.link} className="card" target="_blank" rel="noreferrer">
                                <div className="text__content">
                                    <h2>{certificate.title}</h2>
                                    <h5>{certificate.company} <span>- {certificate.date}</span></h5>
                                </div>
                                <div className="image__content">
                                    <img src={certificate.img} alt="Udemy Fullstack Developer Certificate" />
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            
        </div>
    </section>
    
  )
}

export default Certificate