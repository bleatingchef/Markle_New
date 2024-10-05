import React from 'react';
import frame from '../assets/heroFrame.png';
import frame2 from '../assets/heroFrame2.png';

const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      {/* First Hero Frame */}
      <div>
        <img 
          src={frame} 
          alt="Hero Frame" 
          className="w-full mt-10 md:mt-20 lg:mt-24 xl:mt-28" 
        />
      </div>
      
      {/* Second Hero Frame */}
      <div>
        <img 
          src={frame2} 
          alt="Hero Frame" 
          className="w-full mt-10  md:mt-40 lg:mt-48 xl:mt-56" 
        />
      </div>
    </div>
  );
};

export default Hero;
