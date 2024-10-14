import React from 'react'
import Countdown from '../Components/Countdown'
import ServiceBanner from '../Components/ServiceBanner'
import WebServices from '../Components/WebServices'
import ServicesRoadMap from '../Components/ServicesRoadMap'
import ServicesFramework from '../Components/ServicesFramework'
import ChooseMarkle from '../Components/ChooseMarkle'

const Service_com = () => {
  return (
    <div>
      {/* <Countdown/> */}
      <ServiceBanner/>
      <WebServices/>
      <ServicesRoadMap/>
      <ServicesFramework/>
      <ChooseMarkle/>
    </div>
  )
}

export default Service_com