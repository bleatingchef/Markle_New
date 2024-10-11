import React from 'react';
import aboutbg from "../assets/aboutbg.png";

const AboutData = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-20">
        <img src={aboutbg} alt="Hero Frame" className="w-full h-auto object-cover" />
      </div>
      <div>
        {/* Placeholder for the second image, if needed */}
        {/* <img src={frame2} alt="Hero Frame" className="w-full mt-32" /> */}
      </div>
    </div>
  );
}

export default AboutData;
