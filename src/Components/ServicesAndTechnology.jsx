import React, { useState } from 'react';
import web from '../assets/web.png';
import ecomm from '../assets/ecomm.png';
import app from '../assets/app.png';
import software from '../assets/software.png';
import inter from '../assets/interface.png';
import socialMedia from '../assets/socialMedia.png';
import goal from '../assets/goal.png';
import saas from '../assets/saas.png';
import mvp from '../assets/mvp.png';
import devops from '../assets/devops.png';
import digital from '../assets/digital.png';
import lowcode from '../assets/lowcode.png';
import seeallservicebg from "../assets/servicesImg/seeallservicebg.png"
// import mvp from '../assets/mvp.png';

const ServicesAndTechnology = () => {
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
      isHover: false,
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
      isHover: false,
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
      isHover: false,
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
      isHover: false,
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
      isHover: false,
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
      isHover: false,
    },
    {
      id: 7,
      title: 'MVP Development',
      description: 'React, Angular, Node.js, MongoDB',
      details: 'Quickly bring ideas to life with a minimum viable product designed to validate your concept in the market.',
      icon: mvp,
      bgGradient: 'bg-gradient-to-r from-blue-600 to-blue-500',
      borderGradient: 'hover:border-t-4 hover:border-t-blue-500',
      isHover: true,
    },
    {
      id: 8,
      title: 'DevOps Consulting',
      description: 'CI/CD, Kubernetes, Docker, Jenkins, AWS',
      details: 'Streamline your development process with automation and continuous integration for faster, reliable deployments.',
      icon: devops,
      bgGradient: 'bg-gradient-to-r from-indigo-600 to-indigo-500',
      borderGradient: 'hover:border-t-4 hover:border-t-indigo-500',
      isHover: true,
    },
    {
      id: 9,
      title: 'IT Consulting Service',
      description: 'React Native, Flutter, Swift, Kotlin',
      details: 'Enhance your tech stack and project architecture with expert guidance in mobile and cross-platform development.',
      icon: saas,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-800',
      borderGradient: 'hover:border-t-4 hover:border-t-blue-600',
      isHover: true,
    },
    {
      id: 10,
      title: 'Digital Marketing',
      description: 'SEO, SEM, Social Media, Content Marketing',
      details: 'Boost your online presence and engagement with data-driven digital marketing strategies tailored to your audience.',
      icon: digital,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-500',
      borderGradient: 'hover:border-t-4 hover:border-t-purple-500',
      isHover: true,
    },
    {
      id: 11,
      title: 'Advanced MVP Development',
      description: 'React, Angular, Node.js, Express',
      details: 'Build a scalable MVP equipped with key features to test your product’s viability and prepare for growth.',
      icon: mvp,
      bgGradient: 'bg-gradient-to-r from-pink-600 to-pink-500',
      borderGradient: 'hover:border-t-4 hover:border-t-pink-500',
      isHover: true,
    },
    {
      id: 12,
      title: 'Advanced DevOps Consulting',
      description: 'Kubernetes, Terraform, AWS, Azure, GCP',
      details: 'Optimize infrastructure and automate workflows to enhance your application’s resilience and efficiency.',
      icon: devops,
      bgGradient: 'bg-gradient-to-r from-green-600 to-green-500',
      borderGradient: 'hover:border-t-4 hover:border-t-green-500',
      isHover: true,
    },
    
  ];

  const getServiceContent = (service) => {
    const isHovered = hoveredCard === service.id;
    return (
      <>
        <div
          className={`w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center ${isHovered ? service.bgGradient : service.bgGradient} mb-4 md:mb-6`}
        >
          <img src={service.icon} alt={`${service.title} icon`} className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{service.title}</h3>
        <p className="mt-2 text-gray-600">{service.description}</p>
        <p className="mt-4 text-gray-500">{isHovered ? service.details : service.details}</p>
      </>
    );
  };

  return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="pr-40 pl-40 animate-slideInLeft1">
    <img src={seeallservicebg} alt="Frame 1" className="w-[100rem] max-w-full" />
  </div>
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-8 text-center">Our Recipe for Success</h2>
      <p className="text-center text-xl mb-8 text-gray-500">Our Toolbox of Advanced Technologies and Services</p>
      
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

    </div>
  );
};

export default ServicesAndTechnology;
