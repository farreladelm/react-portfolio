import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Experience from './Components/expreience/Experience'
import Portfolio from './Components/portfolio/Portfolio'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Certificate from './Components/certificate/Certificate'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </>

  )
}

export default App