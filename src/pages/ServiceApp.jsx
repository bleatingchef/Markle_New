import React from 'react'
import ServicesAppDevelopment from '../Components/ServicesAppDevelopment'
import WebServices from '../Components/WebServices'
import ServicesRoadMap from '../Components/ServicesRoadMap'
import ServicesFramework from '../Components/ServicesFramework'
import ChooseMarkle from '../Components/ChooseMarkle'
import ServiceBanner from '../Components/ServiceBanner'

const ServiceApp = () => {
  return (
    <div>
        {/* <ServicesAppDevelopment/> */}
        <ServiceBanner/>
        <WebServices/>
        <ServicesRoadMap/>
        <ServicesFramework/>
        <ChooseMarkle/>
      
    </div>
  )
}

export default ServiceApp
