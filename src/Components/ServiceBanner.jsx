import React from 'react'
import serviceImg from '../assets/servicesImg/banner1.png'

const ServiceBanner = () => {
  return (
    <div className=" mx-auto ">
      <div className="mt-10">
        <img src={serviceImg} alt="Hero Frame" className="w-full h-auto object-cover" />
      </div>
    </div>
  )
}

export default ServiceBanner;
