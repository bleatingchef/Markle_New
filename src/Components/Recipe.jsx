import React, { useState } from 'react';
import web from '../assets/web.png';
import ecomm from '../assets/ecomm.png';
import app from '../assets/app.png';
import software from '../assets/software.png';
import inter from '../assets/interface.png';
import socialMedia from '../assets/socialMedia.png';
import icecube from '../assets/icecube.png';
import saas from '../assets/saas.png';
import mvp from '../assets/mvp.png';
import devops from '../assets/devops.png';
import digital from '../assets/digital.png';
import lowcode from '../assets/lowcode.png';

const Recipe = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Software Development',
      description: 'React, VueJS, NextJS, Angular, NodeJS, Laravel',
      details:
        'Delivering custom web solutions that are fast, secure and designed to boost your digital journey.',
      icon: web,
      bgGradient: 'bg-gradient-to-r from-blue-500 to-blue-600',
      borderGradient: 'hover:border-t-4 hover:border-t-blue-600',
    },
    {
      id: 2,
      title: 'E-Commerce',
      description: 'Magento, Shopify',
      details:
        'Crafting custom e-commerce websites that drive sales, enhance user experience and secure online transactions.',
      icon: ecomm,
      bgGradient: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      borderGradient: 'hover:border-t-4 hover:border-t-indigo-600',
    },
    {
      id: 3,
      title: 'Testing & QA',
      description: 'React Native, Flutter',
      details:
        'Building scalable & secure apps with customized features, ensuring smooth user experience and driving growth.',
      icon: app,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-800',
      borderGradient: 'hover:border-t-4 hover:border-t-purple-800',
    },
    {
      id: 4,
      title: 'Custom Software',
      description: 'Electron.js',
      details:
        'Crafting tailored software systems that solve complex challenges, automate tasks & achieve business efficiency.',
      icon: software,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-500',
      borderGradient: 'hover:border-t-4 hover:border-t-purple-500',
    },
    {
      id: 5,
      title: 'UI / UX Design',
      description: 'React, Angular, NodeJS',
      details:
        'Designing interfaces that are both beautiful & easily accessible ensuring user satisfaction at every scroll.',
      icon: inter,
      bgGradient: 'bg-gradient-to-r from-pink-600 to-pink-500',
      borderGradient: 'hover:border-t-4 hover:border-t-pink-500',
    },
    {
      id: 6,
      title: 'Social Media Management',
      description: 'Facebook, Instagram, YouTube',
      details:
        'Elevating your brand with strategic social media management, content creation and targeted campaigning.',
      icon: socialMedia,
      bgGradient: 'bg-gradient-to-r from-green-600 to-green-500',
      borderGradient: 'hover:border-t-4 hover:border-t-green-500',
    },
    {
      id: 7,
      title: 'SaaS Product',
      description: 'React, Angular, Node Js',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      icon: saas,
      bgGradient: 'bg-gradient-to-r from-blue-600 to-blue-500',
      borderGradient: 'hover:border-t-4 hover:border-t-blue-500',
    },
    {
      id: 8,
      title: 'Low Code/No Code',
      description: 'Magento, Shopify',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      icon: lowcode,
      bgGradient: 'bg-gradient-to-r from-indigo-600 to-indigo-500',
      borderGradient: 'hover:border-t-4 hover:border-t-indigo-500',
    },
    {
      id: 9,
      title: 'IT Consulting Service',
      description: 'React Native, Flutter',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      icon: app,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-800',
      borderGradient: 'hover:border-t-4 hover:border-t-blue-600',
    },
    {
      id: 10,
      title: 'Digital Marketing',
      description: 'Electron.Js',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      icon: digital,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-500',
      borderGradient: 'hover:border-t-4 hover:border-t-purple-500',
    },
    {
      id: 11,
      title: 'MVP Development',
      description: 'React, Angular, Node Js',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      icon: mvp,
      bgGradient: 'bg-gradient-to-r from-pink-600 to-pink-500',
      borderGradient: 'hover:border-t-4 hover:border-t-pink-500',
    },
    {
      id: 12,
      title: 'DevOps Consulting',
      description: 'React, Angular, Node Js',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      icon: devops,
      bgGradient: 'bg-gradient-to-r from-green-600 to-green-500',
      borderGradient: 'hover:border-t-4 hover:border-t-green-500',
    },
  ];

  const getServiceContent = (service) => {
    const isHovered = hoveredCard === service.id;
    return (
      <>
        <div
          className={`w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center ${service.bgGradient} mb-4 md:mb-6`}
        >
          <img src={service.icon} alt={`${service.title} icon`} className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{service.title}</h3>
        <p className="mt-2 text-gray-600">{service.description}</p>
        <p className="mt-4 text-gray-500">{service.details}</p>
      </>
    );
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-8 text-center">Our Recipe for Success</h2>
      <p className="text-center text-lg sm:text-xl mb-8 text-gray-500">Our Toolbox of Advanced Technologies and Services</p>
      
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className={`text-center p-6 md:p-8 bg-white rounded-lg hover:shadow-lg transition-all duration-300 ${service.borderGradient}`}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {getServiceContent(service)}
          </div>
        ))}
      </div>

      {/* Bottom Image - Position it properly */}
      <div className="mt-20 md:mt-32 bg-purple-950 text-white text-start text-2xl sm:text-4xl h-80 sm:h-96 relative flex justify-center items-center rounded-3xl px-4">
        <p className="mt-10 max-w-4xl text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          Our goal is to develop custom software solutions that empower businesses, streamline processes and provide an opportunity to establish as renowned brands.
        </p>
        <img
          src={icecube}
          alt="Goal"
          className="absolute md:bottom-40 bottom-[270px] right-5 w-20 sm:w-28 md:w-40 lg:w-56 xl:w-72 animate-bounce"
          style={{ transform: 'translate(25%, -25%)', maxHeight: '500px' }}
        />
      </div>
    </div>
  );
};

export default Recipe;
