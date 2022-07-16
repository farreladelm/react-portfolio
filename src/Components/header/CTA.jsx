import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download="Farrel Adel Mohammad CV" className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Let's Work</a>
    </div>
  )
}

export default CTA