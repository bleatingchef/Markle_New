import React, { useEffect, useState } from 'react';
import gradient from '../assets/gradient.png';
import mobile from '../assets/mobile.png';
import ice1 from '../assets/ice1.png';
import ice2 from '../assets/ice2.png';
import welcome1 from '../assets/welcome1.png';
import welcome2 from '../assets/welcome2.png';
import welcome3 from '../assets/welcome3.png';
import welcome4 from '../assets/welcome4.png';

const StatsCard = ({ number, text, textsub, image, imageClassName, numberClassName, textClassName, textsubClassName, duration }) => {
  const [count, setCount] = useState(0); // State for the current count
  const targetNumber = parseInt(number.replace("+", ""), 10); // Remove '+' and convert to number

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    const incrementTime = Math.abs(Math.floor(duration / end)); // Calculate time between each increment

    const interval = setInterval(() => {
      start += 1; // Increment count
      setCount(start); // Update state

      if (start === end) {
        clearInterval(interval); // Clear interval when target is reached
      }
    }, incrementTime);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [targetNumber, duration]);

  return (
    <div className="relative p-0">
      <img src={image} alt={text} className={imageClassName} />
      <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
        <div className={numberClassName}>{count}+</div> {/* Display the animated count */}
        <div className={textClassName}>{text}</div>
        {textsub && <div className={textsubClassName}>{textsub}</div>} {/* Render textsub only if it exists */}
      </div>
    </div>
  );
};

const Hero = () => {
  // Array for the first set of StatsCards
  const firstStats = [
    {
      number: "250+",
      text: "Tech Experts",
      textsub: "On-board",
      image: welcome1,
      duration: 2000, // Duration for welcome1
    },
    {
      number: "8+",
      text: "Years of ",
      textsub: "Expertise",
      image: welcome2,
      duration: 2000, // Duration for welcome2
    },
  ];

  // Array for the second set of StatsCards with faster duration
  const secondStats = [
    {
      number: "3350+",
      text: "Projects Delivered",
      image: welcome3,
      duration: 1000, // Faster duration for welcome3
    },
    {
      number: "3120+",
      text: "Happy Clients",
      image: welcome4,
      duration: 1000, // Faster duration for welcome4
    },
  ];

  return (
    <div className="relative mx-auto text-center mt-32">
      {/* First Hero Frame */}
      <div className="relative w-full mb-80 px-4">
        {/* Gradient Image */}
        <img 
          src={gradient} 
          alt="Hero Frame" 
          className="w-full object-cover" 
        />

        {/* Heading and Buttons Section Above Gradient Image */}
        <div className="absolute top-4 left-0 w-full flex flex-col items-center z-10">
          <h1 className='text-3xl text-blue-800 font-bold mb-10'>CODE THAT POWER YOUR SUCCESS.</h1>
          <h1 className="text-3xl md:text-6xl mb-6 font-semibold text-black">
            From Concept to Code: We Make <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"> it Happen</span>
          </h1>
          <p className="mt-2 text-black text-lg md:text-xl">
            Where bold ideas become power innovations.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-800 to-blue-950 text-white px-6 py-3 rounded-full hover:bg-blue-700">
              Schedule a Demo
            </button>
            <button className="bg-gradient-to-r from-purple-800 to-blue-950 text-white px-6 py-3 rounded-full hover:bg-blue-700">
              Hire a Developer
            </button>
          </div>
        </div>

        {/* Mobile Image - Centered at the bottom */}
        <img 
          src={mobile} 
          alt="Mobile" 
          className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 w-40 md:w-48 lg:w-[500px] animate-pulse"
        />

        {/* Ice1 Image - Positioned at the top left */}
        <img 
          src={ice1} 
          alt="Ice 1" 
          className="absolute top-0 left-0 w-24 md:w-32 lg:w-[250px] animate-bounce"
        />

        {/* Ice2 Image - Positioned at the right side */}
        <img 
          src={ice2} 
          alt="Ice 2" 
          className="absolute top-1/3 right-0 w-24 md:w-32 lg:w-[450px] animate-bounce"
        />
      </div>

      {/* Second Hero Frame - Divided into sections */}
      <div className="grid grid-cols-3 mx-16 gap-4 text-start">
        <div className="col-span-1 p-4 rounded-lg">
          <h1 className='text-5xl mb-3 text-indigo-950 font-bold'>Welcome Visionaries</h1>
          <p className="text-black text-xl">As a leading software development establishment, we turn complex challenges into innovative digital solutions. Be it Website development or App development, we empower organizations to innovate, automate, and grow in today's fast-paced digital ecosystem.</p>
        </div>

        {/* Render first set of StatsCards */}
        {firstStats.map((stat, index) => (
          <StatsCard
            key={index}
            number={stat.number}
            text={stat.text}
            textsub={stat.textsub} // Pass textsub
            image={stat.image}
            imageClassName="w-full h-full"
            numberClassName="text-[7rem] font-bold text-white"
            textClassName="text-5xl mt-2 text-white"
            textsubClassName="text-5xl mt-2 text-white"
            duration={stat.duration} // Pass duration
          />
        ))}
      </div>

      {/* Full-width container for welcome3 and welcome4 */}
      <div className="mt-4 mx-16 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Render second set of StatsCards with full width */}
        {secondStats.map((stat, index) => (
          <StatsCard
            key={index}
            number={stat.number}
            text={stat.text}
            image={stat.image}
            imageClassName="w-full h-[360px]"
            numberClassName="text-[7rem] font-bold text-white"
            textClassName="text-5xl mt-2 text-white"
            textsubClassName="text-5xl mt-2 text-white"
            duration={stat.duration} // Pass duration
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
