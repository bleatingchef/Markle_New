import React from 'react'
import ServiceBanner from '../Components/ServiceBanner'
import WebServices from '../Components/WebServices'
import ServicesRoadMap from '../Components/ServicesRoadMap'
import ServicesFramework from '../Components/ServicesFramework'
import ChooseMarkle from '../Components/ChooseMarkle'


const ServicesWebDev = () => {
  return (
    <div>
        <ServiceBanner/>
        <WebServices/>
      <ServicesRoadMap/>
      <ServicesFramework/>
      <ChooseMarkle/>
      
    </div>
  )
}

export default ServicesWebDev
