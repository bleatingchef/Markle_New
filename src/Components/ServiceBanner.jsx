import React from 'react';
import { useLocation } from 'react-router-dom';

// Import all your images here
import gradient1 from '../assets/servicesImg/gradient1.png';
import wave1 from '../assets/servicesImg/wave1.png';

// Add more imports for specific service backgrounds as needed

const ServiceBanner = () => {
  const location = useLocation();
  const path = location.pathname;

  // Define content for each route
  const routeContent = {
    '/service/software-development': {
      title: "Services We Offer",
      subtitle: "Custom Software Development",
      description: "We deliver high-quality, tailored software solutions to meet your unique business needs and drive growth.",
      backgroundImage: gradient1, // Replace with specific image if available
    },
    '/service/ui-ux-design': {
      title: "Services We Offer",
      subtitle: "Creating Engaging User Experiences",
      description: "Our expert designers craft intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
      backgroundImage: gradient1, // Replace with specific image if available
    },
    '/service/mobile-app-development': {
      title: "Services We Offer",
      subtitle: "Innovative Mobile Solutions",
      description: "We build cutting-edge mobile applications for iOS and Android platforms, ensuring a seamless user experience across devices.",
      backgroundImage: gradient1, // Replace with specific image if available
    },
    '/service/testing-and-qa': {
      title: "Services We Offer",
      subtitle: "Ensuring Quality and Reliability",
      description: "Our comprehensive testing and QA services guarantee the delivery of robust, bug-free software products.",
      backgroundImage: gradient1, // Replace with specific image if available
    },
    '/service/all-services': {
      title: "Services We Offer",
      subtitle: "Comprehensive Tech Solutions",
      description: "Explore our full range of services designed to meet all your technology needs and drive your business forward.",
      backgroundImage: gradient1,
    },
    '/service/digital-marketing': {
      title: "Services We Offer",
      subtitle: "Custom Digital Marketing",
      description: "Explore our full range of services designed to meet all your technology needs and drive your business forward.",
      backgroundImage: gradient1,
    },
    '/service/devops-consulting': {
      title: "Services We Offer",
      subtitle: "Custom DevOps Consulting",
      description: "Explore our full range of services designed to meet all your technology needs and drive your business forward.",
      backgroundImage: gradient1,
    },
    '/service/ecommerce': {
      title: "Services We Offer",
      subtitle: "Custom e-Commerce",
      description: "Explore our full range of services designed to meet all your technology needs and drive your business forward.",
      backgroundImage: gradient1,
    },
    '/service/mvp-development': {
      title: "Services We Offer",
      subtitle: "Custom MVP Development",
      description: "Explore our full range of services designed to meet all your technology needs and drive your business forward.",
      backgroundImage: gradient1,
    },
    '/service/saas-products': {
      title: "Services We Offer",
      subtitle: "Custom SaaS Products",
      description: "Explore our full range of services designed to meet all your technology needs and drive your business forward.",
      backgroundImage: gradient1,
    },
    '/service/low-code-no-code': {
      title: "Services We Offer",
      subtitle: "Custom Low Code - No Code",
      description: "Explore our full range of services designed to meet all your technology needs and drive your business forward.",
      backgroundImage: gradient1,
    },
    '/service/web-development': {
      title: "Services We Offer",
      subtitle: "Custom Web Development",
      description: "Explore our full range of services designed to meet all your technology needs and drive your business forward.",
      backgroundImage: gradient1,
    }
  };

  // Get content for the current route, or use default if not found
  const content = routeContent[path] || {
    title: "Custom Software Development",
    subtitle: "Services We Offer",
    description: "We create feature-rich applications and are a leading software development company. We see each little plan component and detail of your company's app requirements.",
    backgroundImage: gradient1,
  };

  return (
    <div className="relative mx-auto text-center mt-16">
     
      <div className="relative w-full mb-32 md:mb-80">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-transparent z-10"></div>
        <img src={content.backgroundImage} alt="Background Gradient" className="w-full object-cover opacity-50" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl z-20 px-4 md:px-8 pt-4 md:pt-8">
          <h2 className="text-blue-600 text-md md:text-xl mb-2 font-bold">THE FUTURE BELONGS TO YOU</h2>
          
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-semibold mb-6">
            {content.subtitle}
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            {content.title}
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-8 max-w-4xl mx-auto">
            {content.description}
          </p>
        </div>
        <img
          src={wave1}
          alt="Wave Design"
          className="absolute bottom-[-60px] md:bottom-[-150px] left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/2 lg:w-[1500px] z-30 animate-pulse"
        />
      </div>
    </div>
  );
};

export default ServiceBanner;