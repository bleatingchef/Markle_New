import React from 'react'
import img from "../assets/servicesImg/banner3.png"

const ServicesUIBanner = () => {
  return (
      <div className=" mx-auto ">
      <div className="mt-10">
        <img src={img} alt="Hero Frame" className="w-full h-auto object-cover" />
      </div>
    </div>
  )
}

export default ServicesUIBanner
