import React from 'react';
import web from '../assets/web.png';
import ecomm from '../assets/ecomm.png';
import app from '../assets/app.png';
import software from '../assets/software.png';
import inter from '../assets/interface.png';
import socialMedia from '../assets/socialMedia.png';

const AboutRecipe = () => {
  // Creating 12 separate service cards
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'React, VueJS, NextJS, Angular, NodeJS, Laravel',
      details: 'Delivering custom web solutions that are fast, secure and designed to boost your digital journey.',
      icon: web,
      bgGradient: 'bg-gradient-to-r from-blue-500 to-blue-600',
      borderGradient: 'hover:border-t-4 hover:border-t-blue-600',
    },
    {
      id: 2,
      title: 'E-Commerce',
      description: 'Magento, Shopify',
      details: 'Crafting custom e-commerce websites that drive sales, enhance user experience and secure online transactions.',
      icon: ecomm,
      bgGradient: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      borderGradient: 'hover:border-t-4 hover:border-t-indigo-600',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'React Native, Flutter',
      details: 'Building scalable & secure apps with customized features, ensuring smooth user experience and driving growth.',
      icon: app,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-800',
      borderGradient: 'hover:border-t-4 hover:border-t-purple-800',
    },
    {
      id: 4,
      title: 'Software Development',
      description: 'Electron.js',
      details: 'Crafting tailored software systems that solve complex challenges, automate tasks & achieve business efficiency.',
      icon: software,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-500',
      borderGradient: 'hover:border-t-4 hover:border-t-purple-500',
    },
    {
      id: 5,
      title: 'UI / UX Design',
      description: 'React, Angular, NodeJS',
      details: 'Designing interfaces that are both beautiful & easily accessible ensuring user satisfaction at every scroll.',
      icon: inter,
      bgGradient: 'bg-gradient-to-r from-pink-600 to-pink-500',
      borderGradient: 'hover:border-t-4 hover:border-t-pink-500',
    },
    {
      id: 6,
      title: 'Social Media Management',
      description: 'Facebook, Instagram, YouTube',
      details: 'Elevating your brand with strategic social media management, content creation and targeted campaigning.',
      icon: socialMedia,
      bgGradient: 'bg-gradient-to-r from-green-600 to-green-500',
      borderGradient: 'hover:border-t-4 hover:border-t-green-500',
    },
    {
      id: 7,
      title: 'SaaS Product Development',
      description: 'React, Angular, Node.js',
      details: 'Building SaaS solutions with scalability, performance, and reliability, tailored to your business needs.',
      icon: web,
      bgGradient: 'bg-gradient-to-r from-blue-600 to-blue-500',
      borderGradient: 'hover:border-t-4 hover:border-t-blue-500',
    },
    {
      id: 8,
      title: 'Low Code/No Code Solutions',
      description: 'OutSystems, Mendix',
      details: 'Create powerful applications quickly and efficiently with low code/no code platforms.',
      icon: ecomm,
      bgGradient: 'bg-gradient-to-r from-indigo-600 to-indigo-500',
      borderGradient: 'hover:border-t-4 hover:border-t-indigo-500',
    },
    {
      id: 9,
      title: 'IT Consulting Service',
      description: 'React Native, Flutter',
      details: 'Providing expert IT consultation to help you innovate and grow through the use of the latest technologies.',
      icon: app,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-800',
      borderGradient: 'hover:border-t-4 hover:border-t-purple-800',
    },
    {
      id: 10,
      title: 'Digital Marketing Solutions',
      description: 'SEO, SEM, Social Media',
      details: 'Helping businesses grow with tailored digital marketing strategies and a focus on ROI.',
      icon: software,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-500',
      borderGradient: 'hover:border-t-4 hover:border-t-purple-500',
    },
    {
      id: 11,
      title: 'MVP Development',
      description: 'React, Angular, Node.js',
      details: 'Building Minimum Viable Products (MVPs) for startups and enterprises to test market viability quickly.',
      icon: inter,
      bgGradient: 'bg-gradient-to-r from-pink-600 to-pink-500',
      borderGradient: 'hover:border-t-4 hover:border-t-pink-500',
    },
    {
      id: 12,
      title: 'DevOps Consulting',
      description: 'CI/CD, Cloud Infrastructure',
      details: 'Providing expertise in DevOps to streamline development, deployment, and operation workflows.',
      icon: socialMedia,
      bgGradient: 'bg-gradient-to-r from-green-600 to-green-500',
      borderGradient: 'hover:border-t-4 hover:border-t-green-500',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-8 text-center">Our Service Offerings</h2>
      <p className="text-center text-xl mb-8 text-gray-500">Explore our wide range of professional services</p>
      
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className={`text-center p-6 md:p-8 bg-white rounded-lg hover:shadow-lg transition-all duration-300 ${service.borderGradient}`}
          >
            <div
              className={`w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center ${service.bgGradient} mb-4 md:mb-6`}
            >
              <img src={service.icon} alt={`${service.title} icon`} className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
            <p className="mt-4 text-gray-500">{service.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutRecipe;
