import React from 'react'
import Countdown from '../Components/Countdown'
import AboutData from '../Components/AboutData'
import Welcome from '../Components/Welcome'
import About_Recipe from '../Components/About_Recipe'
import AboutTestimonials from '../Components/AboutTestimonials'
import DateWiseAboutCompany from '../Components/DateWiseAboutCompany'
import Map from '../Components/Map'

const About_com = () => {
  return (
    <div>
        <AboutData/>
        <Welcome/>
        <About_Recipe/>
        <DateWiseAboutCompany/>
        <Map/>
        {/* <AboutTestimonials/> */}
    </div>
  )
}

export default About_com