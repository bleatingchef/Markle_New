import React from 'react';
import past from "../assets/past.png"; // Ensure the path is correct
import person from "../assets/person.png"; // Ensure the path is correct
import frame2 from '../assets/heroFrame2.png';

const Welcome = () => {
  return (
    <>
    <div className="max-w-7xl  mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-5xl text-purple-950 mb-10 text-center">Welcome to Markle Tech IT Solutions</h1>
      
      <p className="text-sm sm:text-xl text-center text-gray-800 mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      
      <div className="space-y-6">
        {/* Past Work Section */}
        <div className="flex flex sm:flex-row items-start">
          <div className="flex-shrink-0 w-12 h-12 mb-2 sm:mb-0 bg-purple-950 rounded-full ">
            <img src={past} alt="Past Work" className="w-full h-full object-cover rounded-full p-2" />
          </div>
          <div className="sm:ml-4 mb-10">
            <h2 className="text-lg sm:text-2xl font-semibold text-purple-950 mb-1">Past Work</h2>
            <p className="text-sm sm:text-xl max-w-sm text-gray-800">We have a proven track record for best, And We Are Honored That A Large Portion Of Our Business Comes From Referrals.</p>
          </div>
        </div>
        
        {/* Personalised Services Section */}
        <div className="flex flex-col sm:flex-row items-start">
          <div className="flex-shrink-0 w-12 h-12 mb-2 sm:mb-0 bg-purple-950 rounded-full">
            <img src={person} alt="Personalised Services" className="w-full h-full object-cover rounded-full p-2" />
          </div>
          <div className="sm:ml-4">
            <h2 className="text-lg sm:text-2xl font-semibold text-purple-950 mb-1">Personalised Services</h2>
            <p className="text-sm sm:text-xl max-w-sm text-gray-800">We Know That Every Client Deserves The Care They Require. Yes, We Are The Website Design Firm That Gives You A Highly Customised Experience And Places A High Premium On Each Project.</p>
          </div>
        </div>
      </div>
    </div>
     <div className='container mx-auto px-4'>
     <img 
       src={frame2} 
       alt="Hero Frame" 
       className="w-full mt-10  md:mt-40 lg:mt-48 xl:mt-56" 
     />
   </div>
   </>
  );
}

export default Welcome;
