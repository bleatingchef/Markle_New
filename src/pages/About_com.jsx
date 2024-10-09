import React from 'react'
import Countdown from '../Components/Countdown'
import AboutData from '../Components/AboutData'
import Welcome from '../Components/Welcome'
import About_Recipe from '../Components/About_Recipe'
import AboutTestimonials from '../Components/AboutTestimonials'

const About_com = () => {
  return (
    <div>
        <AboutData/>
        <Welcome/>
        <About_Recipe/>
        <AboutTestimonials/>
    </div>
  )
}

export default About_com