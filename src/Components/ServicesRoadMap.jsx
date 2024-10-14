import React from 'react';
import pathImage from '../assets/servicesImg/path.png'; // Update with your path image path

const steps = [
  {
    id: 1,
    title: "Requirement Analysis To Understand The Scope Of Work And Details",
    description:
      "We take all the needed details of the project, such as basic requirements, and web application architecture.",
    position: { top: '10%', left: '60%' }, // Adjust this for better positioning
  },
  {
    id: 2,
    title: "Designing To Make A Plan And Wireframe Of The Final Product",
    description:
      "After analyzing the data, we make a wireframe of the final product with technical specifications.",
    position: { top: '25%', right: '60%' }, // Adjust this for better positioning
  },
  {
    id: 3,
    title: "Developing The Product With The Most Crucial Step",
    description:
      "We keep all the requirements and design in mind to develop the product as the coders take the project in their own hands.",
    position: { top: '37%', left: '60%' }, // Adjust this for better positioning
  },
  {
    id: 4,
    title: "Testing To Ensure Quality Assurance And Other Necessary Functionality",
    description:
      "After the web app development, the project comes under testing where testers check for bugs.",
    position: { top: '53%', right: '60%' }, // Adjust this for better positioning
  },
  {
    id: 5,
    title: "Deploying The Website To The Live Server And The Initial Launch",
    description:
      "After in-depth testing and analysis, the domain gets configured and monitors any issues that might occur.",
    position: { top: '65%', left: '60%' }, // Adjust this for better positioning
  },
  {
    id: 6,
    title: "Regularly Updating Content And Features While Monitoring Security",
    description:
      "We take adaptive, corrective, and perfective maintenance to improve and update the final product.",
    position: { top: '82%', right: '60%' }, // Adjust this for better positioning
  },
];

const ServicesRoadMap = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-whitepy-12 py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-8 text-center">
        Our Web Application Development Process!
      </h1>
      <p className="text-xl text-gray-600 text-center mb-10 max-w-7xl">
        We use a comprehensive process covering all the required steps to develop the product a client needs. Our team holds proficiency in web application development, and you will be catered to with utmost attention and honesty at Markle Tech.
      </p>

      <div className="relative w-full max-w-2xl">
        {/* Path Image in the Center */}
        <img
          src={pathImage}
          alt="Path"
          className="inset-0 mx-auto h-full w-auto"
        />

        {/* Overlay Text for Each Step */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`absolute ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
            style={step.position} // Positioning the text according to step positions
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">{step.title}</h3>
            <p className="text-md md:text-lg text-gray-600 max-w-xs mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesRoadMap;
