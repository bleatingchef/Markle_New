import React from 'react';
import missionbg from "../assets/missionbg.png";
import missionright from "../assets/missionright.png";

const Mission = () => {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto mt-10">
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl text-blue-600 uppercase font-semibold mb-2">THE FUTURE BELONGS TO YOU</h2>
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Mission</h1>
        <p className="text-gray-600">
          Accelerate your business and jump into the new era with the help of a team of A-players.
        </p>
      </div> */}
      <img src={missionbg} alt="Background" className='mb-20' style={{width:"1200px", height:"150px"}}/>
      
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
          <h2 className="text-5xl text-start leading-[4rem] font-medium text-purple-950 mb-10">
            Empowering Innovation & Delivering Excellence
          </h2>
          <p className="text-gray-800 text-lg">
            At our core, we are dedicated to transforming ideas into impactful software solutions. Our mission
            is to drive digital success by harnessing the power of innovative technology, delivering custom solutions 
            that elevate your business in today's competitive landscape.
          </p>
          <p className="text-gray-800 text-lg mt-6">
            With a team of experts in modern software engineering, we focus on creating scalable, robust, 
            and user-centered applications that meet the unique demands of our clients. From concept to 
            deployment, we are committed to quality, efficiency, and a seamless development process that 
            keeps you informed and engaged every step of the way.
          </p>
          <p className="text-gray-800 text-lg mt-6">
            We believe in building long-lasting partnerships with our clients by consistently delivering 
            top-tier solutions that help them adapt and grow. As a forward-thinking development team, 
            our goal is not just to meet your needs today but to future-proof your technology for tomorrow.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={missionright} alt="Mission visualization" className="rounded-lg shadow-lg" style={{width:"500px", height:"600px"}} />
        </div>
      </div>
    </div>
  );
};

export default Mission;
