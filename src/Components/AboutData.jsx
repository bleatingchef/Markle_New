import React from 'react'
import aboutbg from "../assets/aboutbg.png"

const AboutData = () => {
  return (
        <div className="container mx-auto px-4">
      <div>
        <img src={aboutbg} alt="Hero Frame" className="w-full mt-16" />
      </div>
      <div>
        {/* <img src={frame2} alt="Hero Frame" className="w-full mt-32" /> */}
      </div>
    </div>
  )
}

export default AboutData