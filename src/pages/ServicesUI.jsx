import React from 'react'
import WebServices from '../Components/WebServices'
import ServicesRoadMap from '../Components/ServicesRoadMap'
import ServicesFramework from '../Components/ServicesFramework'
import ChooseMarkle from '../Components/ChooseMarkle'
import ServicesUIBanner from '../Components/ServicesUIBanner'

const ServicesUI = () => {
  return (
    <div>
        <ServicesUIBanner/>
        <WebServices/>
      <ServicesRoadMap/>
      <ServicesFramework/>
      <ChooseMarkle/>
      
    </div>
  )
}

export default ServicesUI
