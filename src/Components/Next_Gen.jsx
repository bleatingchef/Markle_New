import React, { useState } from 'react';
import frameworkImg from '../assets/framework.png';
import frontEndImg from '../assets/frontend.png';
import databaseImg from '../assets/db.png';
import deploymentImg from '../assets/deploy.png';
import apiImg from '../assets/api.png';
import monitoringImg from '../assets/monitor.png';
import buildToolImg from '../assets/build.png';

const Next_Gen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frameworks');

  const categories = [
    {
      name: 'Frameworks',
      image: frameworkImg
    },
    {
      name: 'Front End',
      image: frontEndImg
    },
    {
      name: 'Databases and Storages',
      image: databaseImg
    },
    {
      name: 'Deployment',
      image: deploymentImg
    },
    {
      name: "API's",
      image: apiImg
    },
    {
      name: 'Application Monitoring',
      image: monitoringImg
    },
    {
      name: 'Build Tools',
      image: buildToolImg
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-8 text-center">
          Next-Gen Technology Solutions For Every Business
        </h1>
        <p className="text-center text-xl mb-8 text-gray-500">
          We are empowering businesses of all sizes to achieve digital dominance that propels you to
          the forefront of your industry to ensure long-term success. We offer tailored strategies for
          limitless growth.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Side - Categories */}
        <div className="md:w-1/3">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`cursor-pointer py-3 px-4 mb-2 rounded-lg transition-all duration-300 
                ${selectedCategory === category.name 
                  ? 'bg-purple-100 text-purple-800 font-semibold' 
                  : 'hover:bg-gray-100'
                }`}
            >
              {category.name}
            </div>
          ))}
        </div>

        {/* Right Side - Image Section */}
        <div className="md:w-2/3">
          <div className="flex justify-center items-center">
            {categories.find(cat => cat.name === selectedCategory) && (
              <div className="p-4">
                <img
                  src={categories.find(cat => cat.name === selectedCategory)?.image}
                  alt={`${selectedCategory} technology`}
                  className="object-contain"
                  style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next_Gen;
