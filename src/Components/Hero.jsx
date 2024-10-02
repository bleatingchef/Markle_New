import React from 'react';
import frame from '../assets/heroFrame.png';
import frame2 from '../assets/heroFrame2.png';
const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <img src={frame} alt="Hero Frame" className="w-full mt-16" />
      </div>
      <div>
        <img src={frame2} alt="Hero Frame" className="w-full mt-32" />
      </div>
    </div>
  );
};

export default Hero;
