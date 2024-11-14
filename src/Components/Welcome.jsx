import React from 'react';
import past from "../assets/past.png"; // Ensure the path is correct
import person from "../assets/person.png"; // Ensure the path is correct
import frame2 from '../assets/heroFrame2.png';

const Welcome = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl sm:text-5xl text-purple-950 mb-10 text-center">
          Welcome to Markle Tech IT Solutions
        </h1>

        <p className="text-sm sm:text-xl text-center text-gray-800 mb-4">
        At Markle Tech IT Solutions, we are dedicated to providing cutting-edge technology solutions to empower businesses and enhance their digital transformation journey. With a commitment to innovation, reliability, and customer satisfaction, we work closely with our clients to address their unique needs and challenges.</p>

<p className="text-sm sm:text-xl text-center text-gray-800 mb-16">
   Our services range from custom software development and cloud computing to data analytics and cybersecurity, helping companies streamline operations, improve efficiency, and stay ahead in a competitive landscape. Our experienced team of IT professionals combines technical expertise with industry insights to deliver scalable and sustainable solutions.</p>

{/* Let us be your trusted partner in driving growth and unlocking new possibilities for your business. */}


        

        <div className="space-y-6 sm:space-y-0 sm:flex sm:justify-between">
          {/* Past Work Section */}
          <div className="flex flex-col sm:flex-row items-start sm:w-1/2 rounded-2xl shadow-xl shadow-cyan-200 p-5">
            <div className="flex-shrink-0 w-12 h-12 mb-2 sm:mb-0 bg-purple-950 rounded-full">
              <img src={past} alt="Past Work" className="w-full h-full object-cover rounded-full p-2" />
            </div>
            <div className="sm:ml-4 mb-10 sm:mb-0">
              <h2 className="text-lg sm:text-2xl font-semibold text-purple-950 mb-1">Past Work</h2>
              <p className="text-sm sm:text-xl max-w-sm text-gray-800">
                We have a proven track record for best, And We Are Honored That A Large Portion Of Our Business Comes From Referrals.
              </p>
            </div>
          </div>

          {/* Personalised Services Section */}
          <div className="flex flex-col sm:flex-row items-start sm:w-1/2 rounded-2xl shadow-xl shadow-cyan-200 p-5 ml-80">
            <div className="flex-shrink-0 w-12 h-12 mb-2 sm:mb-0 bg-purple-950 rounded-full">
              <img src={person} alt="Personalised Services" className="w-full h-full object-cover rounded-full p-2" />
            </div>
            <div className="sm:ml-4">
              <h2 className="text-lg sm:text-2xl font-semibold text-purple-950 mb-1">Personalised Services</h2>
              <p className="text-sm sm:text-xl max-w-sm text-gray-800">
                We Know That Every Client Deserves The Care They Require. Yes, We Are The Website Design Firm That Gives You A Highly Customised Experience And Places A High Premium On Each Project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* <img 
          src={frame2} 
          alt="Hero Frame" 
          className="w-full mt-10 md:mt-40 lg:mt-48 xl:mt-56" 
        /> */}
      </div>
    </>
  );
}

export default Welcome;
