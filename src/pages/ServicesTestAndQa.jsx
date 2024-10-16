import React from 'react'
import ServicesTest from '../Components/ServicesTest'
import WebServices from '../Components/WebServices'
import ServicesRoadMap from '../Components/ServicesRoadMap'
import ServicesFramework from '../Components/ServicesFramework'
import ChooseMarkle from '../Components/ChooseMarkle'
import ServiceBanner from '../Components/ServiceBanner'

const ServicesTestAndQa = () => {
  return (
    <div>
        {/* <ServicesTest/> */}
        <ServiceBanner/>
        <WebServices/>
      <ServicesRoadMap/>
      <ServicesFramework/>
      <ChooseMarkle/>
      
    </div>
  )
}

export default ServicesTestAndQa
