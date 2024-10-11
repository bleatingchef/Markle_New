import React, { useState } from 'react';
import m1 from "../assets/m1.avif"


const milestones = [
  {
    title: 'EVOLUTION',
    description: 'A journey through the history of our company’s growth.',
    icon: '💼',
    bgColor: 'from-cyan-400 to-blue-500',
    imageUrl: m1, // Replace with your image path
  },
  {
    title: 'EXPANSION',
    description: 'Building a global presence through strategic planning and execution.',
    icon: '💬',
    bgColor: 'from-pink-500 to-orange-400',
    imageUrl: 'path/to/expansion-image.png', // Replace with your image path
  },
  {
    title: 'INNOVATION',
    description: 'Pushing boundaries and driving progress through creative solutions.',
    icon: '🏠',
    bgColor: 'from-purple-500 to-pink-500',
    imageUrl: 'path/to/innovation-image.png', // Replace with your image path
  },
  {
    title: 'LEADERSHIP',
    description: 'Developing and cultivating effective leadership at all levels.',
    icon: '⚙️',
    bgColor: 'from-indigo-500 to-blue-600',
    imageUrl: 'path/to/leadership-image.png', // Replace with your image path
  },
];

const TimelineItem = ({ title, description, icon, bgColor, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col justify-center items-center text-center rounded-lg p-6 bg-gradient-to-r ${bgColor} w-60 h-80 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl`}
  >
    <div className="text-white text-3xl">{icon}</div>
    <h3 className={`mt-4 text-white text-2xl font-bold ${isActive ? 'animate-pulse' : ''}`}>{title}</h3>
    <p className={`mt-2 text-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
      {description}
    </p>
  </div>
);

const DateWiseAboutCompany = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-pink-600">Business Timeline</h2>

      {/* Sliding container */}
      <div className="flex overflow-x-scroll w-full snap-x scrollbar-hide justify-center space-x-6">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="snap-center"
            onClick={() => setActiveIndex(index)}
          >
            <TimelineItem
              title={milestone.title}
              description={milestone.description}
              icon={milestone.icon}
              bgColor={milestone.bgColor}
              isActive={activeIndex === index}
            />
          </div>
        ))}
      </div>

      {/* Active milestone display with enlarged image */}
      <div className="mt-10 p-6">
        <img
          src={milestones[activeIndex].imageUrl}
          alt={milestones[activeIndex].title}
          className="w-64 h-64 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <TimelineItem
          title={milestones[activeIndex].title}
          description={milestones[activeIndex].description}
          icon={milestones[activeIndex].icon}
          bgColor={milestones[activeIndex].bgColor}
          isActive={true}
        />
      </div>
    </div>
  );
};

export default DateWiseAboutCompany;
