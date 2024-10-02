import React from 'react';
import web from '../assets/web.png';
import ecomm from '../assets/ecomm.png';
import app from '../assets/app.png';
import software from '../assets/software.png';
import inter from '../assets/interface.png';
import socialMedia from '../assets/socialMedia.png';
import goal from '../assets/goal.png';


const Recipe = () => {
  const services = [
    {
      id: 1,
      title: 'Web',
      description: 'React, VueJS, NextJS, Angular, NodeJS, Laravel',
      details:
        'Delivering custom web solutions that are fast, secure and designed to boost your digital journey.',
      icon: web,
      bgGradient: 'bg-gradient-to-r from-blue-600 to-blue-500',
      borderGradient: 'hover:border-t-4 hover:border-t-blue-500',
    },
    {
      id: 2,
      title: 'Ecommerce',
      description: 'Magento, Shopify',
      details:
        'Crafting custom e-commerce websites that drive sales, enhance user experience and secure online transactions.',
      icon: ecomm,
      bgGradient: 'bg-gradient-to-r from-indigo-600 to-indigo-500',
      borderGradient: 'hover:border-t-4 hover:border-t-indigo-500',
    },
    {
      id: 3,
      title: 'App',
      description: 'React Native, Flutter',
      details:
        'Building scalable & secure apps with customized features, ensuring smooth user experience and driving growth.',
      icon: app,
      bgGradient: 'bg-gradient-to-r from-blue-700 to-blue-600',
      borderGradient: 'hover:border-t-4 hover:border-t-blue-600',
    },
    {
      id: 4,
      title: 'Software',
      description: 'Electron.js',
      details:
        'Crafting tailored software systems that solve complex challenges, automate tasks & achieve business efficiency.',
      icon: software,
      bgGradient: 'bg-gradient-to-r from-purple-700 to-purple-500',
      borderGradient: 'hover:border-t-4 hover:border-t-purple-500',
    },
    {
      id: 5,
      title: 'Interface Design',
      description: 'React, Angular, NodeJS',
      details:
        'Designing interfaces that are both beautiful & easily accessible ensuring user satisfaction at every scroll.',
      icon: inter,
      bgGradient: 'bg-gradient-to-r from-pink-600 to-pink-500',
      borderGradient: 'hover:border-t-4 hover:border-t-pink-500',
    },
    {
      id: 6,
      title: 'Social Media',
      description: 'Facebook, Instagram, YouTube',
      details:
        'Elevating your brand with strategic social media management, content creation and targeted campaigning.',
      icon: socialMedia,
      bgGradient: 'bg-gradient-to-r from-green-600 to-green-500',
      borderGradient: 'hover:border-t-4 hover:border-t-green-500',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-5xl text-purple-950 mb-4">Our Recipe for Success</h2>
      <p className="text-center text-2xl text-gray-500 mb-16">Our Toolbox of Advanced Technologies and Services</p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className={`text-center p-8 bg-white rounded-lg hover:shadow-lg transition-all duration-300 ${service.borderGradient}`}
          >
            <div
              className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${service.bgGradient} mb-6`}
            >
              <img src={service.icon} alt={`${service.title} icon`} className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
            <p className="mt-4 text-gray-500">{service.details}</p>

          </div>
        ))}
      </div>
      <div className='flex'>
      {/* <img src={eclipse} alt="" className=''/> */}


      </div>
      <div className="text-center mt-12">
        <button className="bg-gray-200 text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 transition">
          Load More <span className="text-purple-600">+</span>
        </button>
      </div>
      <img src={goal} alt="" className='ml-40' style={{width:"1500px", height:"500px"}}/>

    </div>
  );
};

export default Recipe;