import React from 'react'
import ServicesAppDevelopment from '../Components/ServicesAppDevelopment'
import WebServices from '../Components/WebServices'
import ServicesRoadMap from '../Components/ServicesRoadMap'
import ServicesFramework from '../Components/ServicesFramework'
import ChooseMarkle from '../Components/ChooseMarkle'

const ServiceApp = () => {
  return (
    <div>
        <ServicesAppDevelopment/>
        <WebServices/>
        <ServicesRoadMap/>
        <ServicesFramework/>
        <ChooseMarkle/>
      
    </div>
  )
}

export default ServiceApp
