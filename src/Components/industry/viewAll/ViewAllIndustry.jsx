import React from 'react'
import viewallindustrybg from '../../../assets/industryImages/viewallindustrybg.png'
import ViewAllData from './ViewAllData'

const ViewAllIndustry = () => {
  return (
    <div>
       <div className="pr-40 pl-40 pt-20 animate-slideInLeft1">
                <img src={viewallindustrybg} alt="Frame 1" className="w-[100rem] max-w-full" />
       </div>
       <ViewAllData/>

    </div>
  )
}

export default ViewAllIndustry