import React from 'react';
import Search from '../assets/Search.png';
import Group from '../assets/Group.png';
import pen from '../assets/pen.png';
import Arrow1 from '../assets/Arrow1.png'; // Left to Right arrow
import Arrow2 from '../assets/Arrow2.png'; // Right to Left arrow

const Card = ({ icon, title, description }) => (
  <div className="bg-purple-50 p-6 max-w-xs rounded-3xl shadow-md mx-auto">
    <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-md">
      <img src={icon} alt={title} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Define the problem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
      icon: Group,
      title: "Develop a Solution",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
      icon: pen,
      title: "Refine",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">How it Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 relative">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <Card {...step} />
            {index < steps.length - 1 && (
              <div className="absolute inset-0 flex justify-center items-center">
                <img
                  src={index === 0 ? Arrow1 : Arrow2}
                  alt="Curved arrow"
                  className="w-40 h-12 absolute"
                  style={{ top: '50%', left: '100%', transform: 'translate(-50%, -50%)' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
