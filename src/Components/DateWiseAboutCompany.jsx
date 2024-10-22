import React, { useState } from 'react';
import m1 from "../assets/m1.avif"; // Your first image
import milestoneImage from "../assets/logo.png"; // Your uploaded image

const milestones = [
  {
    year: '2009-2011',
    description: 'We started our journey in 2009 with a modest team fueled by big boundless ambitions.',
    imageUrl: m1,
  },
  {
    year: '2012-2014',
    description: 'We expanded our team and began taking on significant projects that showcased our capabilities.',
    imageUrl: m1,
  },
  {
    year: '2015-2017',
    description: 'Achieved significant milestones, becoming a recognized player in the industry.',
    imageUrl: m1,
  },
  {
    year: '2018-2020',
    description: 'Continued innovation and growth, reaching new heights in technology.',
    imageUrl: m1,
  },
  {
    year: '2021-2023',
    description: 'Emerging as an industry leader with numerous successful projects.',
    imageUrl: m1,
  },
  {
    year: '2024 And Many More',
    description: 'Looking ahead to the future with ambitious goals.',
    imageUrl: m1,
  },
];

const WavyLine = () => (
  <svg className="absolute top-11 left-24 w-[1500px] h-20 z-0" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 20 Q 100 0, 200 20 T 400 20 T 600 20 T 800 20 T 1000 20"
      fill="none"
      stroke="#CBD5E0"
      strokeWidth="2"
    />
  </svg>
);
const WavyLine2 = () => (
  <svg className="absolute top-11 left-[22rem] w-[1500px] h-20 z-0 " xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 20 Q 100 0, 200 20 T 400 20 T 600 20 T 800 20 T 1000 20"
      fill="none"
      stroke="#CBD5E0"
      strokeWidth="2"
    />
  </svg>
);

const DateWiseAboutCompany = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center items-center mt-10 mb-20">
      <div className="flex flex-col items-center relative"> {/* Added relative positioning */}
        {/* Wavy line */}
        <WavyLine />
        <WavyLine2/>
        
        {/* Horizontal buttons with years above */}
        <div className="flex space-x-8 mb-6 relative z-10"> {/* Added z-index to keep buttons above the line */}
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="mb-5 text-lg mx-16 font-semibold">{milestone.year}</span>
              <button
                className={`w-12 h-12 rounded-full mb-20 flex items-center justify-center text-white transition-colors duration-300 ${
                  activeIndex === index ? 'bg-pink-600' : 'bg-gray-400 hover:bg-pink-500'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {/* You can put an icon or text inside the button */}
              </button>
            </div>
          ))}
        </div>

        {/* Active milestone display with image and description */}
        <div className="flex flex-row items-center">
          <img
            src={milestones[activeIndex].imageUrl}
            alt={milestones[activeIndex].year}
            className="w-[600px] h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="ml-6 text-lg max-w-lg font-semibold text-gray-800">
            {milestones[activeIndex].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateWiseAboutCompany;