// import React, { useEffect, useState } from 'react';
// import gradient from '../assets/gradient.png';
// import mobile from '../assets/mobile.png';
// import ice1 from '../assets/ice1.png';
// import ice2 from '../assets/ice2.png';
// import welcome1 from '../assets/welcome1.png';
// import welcome2 from '../assets/welcome2.png';
// import welcome3 from '../assets/welcome3.png';
// import welcome4 from '../assets/welcome4.png';

// const StatsCard = ({ number, text, textsub, image, imageClassName, numberClassName, textClassName, textsubClassName, duration }) => {
//   const [count, setCount] = useState(0);
//   const targetNumber = parseInt(number.replace("+", ""), 10);

//   useEffect(() => {
//     let start = 0;
//     const end = targetNumber;
//     const incrementTime = Math.abs(Math.floor(duration / end));

//     const interval = setInterval(() => {
//       start += 1;
//       setCount(start);

//       if (start === end) {
//         clearInterval(interval);
//       }
//     }, incrementTime);

//     return () => clearInterval(interval);
//   }, [targetNumber, duration]);

//   return (
//     <div className="relative p-0">
//       <img src={image} alt={text} className={imageClassName} />
//       <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
//         <div className={numberClassName}>{count}+</div>
//         <div className={textClassName}>{text}</div>
//         {textsub && <div className={textsubClassName}>{textsub}</div>}
//       </div>
//     </div>
//   );
// };

// const Hero = () => {
//   const firstStats = [
//     {
//       number: "250+",
//       text: "Tech Experts",
//       textsub: "On-board",
//       image: welcome1,
//       duration: 2000,
//     },
//     {
//       number: "8+",
//       text: "Years of ",
//       textsub: "Expertise",
//       image: welcome2,
//       duration: 2000,
//     },
//   ];

//   const secondStats = [
//     {
//       number: "3350+",
//       text: "Projects Delivered",
//       image: welcome3,
//       duration: 1000,
//     },
//     {
//       number: "3120+",
//       text: "Happy Clients",
//       image: welcome4,
//       duration: 1000,
//     },
//   ];

//   return (
//     <div className="relative mx-auto text-center mt-32 px-4">
//       {/* First Hero Frame */}
//       <div className="relative w-full mb-32 md:mb-80">
//         <img src={gradient} alt="Hero Frame" className="w-full object-cover" />

//         {/* Heading and Buttons Section */}
//         {/* <div className="absolute top-4 left-0 w-full flex flex-col items-center z-10 px-4 md:px-0">
//           <h1 className='text-2xl md:text-3xl text-blue-800 font-bold mb-4'>CODE THAT POWER YOUR SUCCESS.</h1>
//           <h1 className="text-2xl md:text-4xl lg:text-6xl mb-4 font-semibold text-black">
//             From Concept to Code: We Make <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">it Happen</span>
//           </h1>
//           <p className="mt-2 text-black text-md md:text-lg lg:text-xl">
//             Where bold ideas become power innovations.
//           </p>
//           <div className="mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
//             <button className="bg-gradient-to-r from-purple-800 to-blue-950 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-blue-700">
//               Schedule a Demo
//             </button>
//             <button className="bg-gradient-to-r from-purple-800 to-blue-950 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-blue-700">
//               Hire a Developer
//             </button>
//           </div>
//         </div> */}
//        <div className="absolute top-4 left-0 w-full flex flex-col items-center z-10 px-4 md:px-8">
//   <h1 className="text-xs sm:text-2xl md:text-3xl lg:text-4xl text-blue-800 font-bold mb-2 sm:mb-4">
//     CODE THAT POWERS YOUR SUCCESS.
//   </h1>
//   <h1 className="text-sm sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 font-semibold text-black text-center">
//     From Concept to Code: We Make{" "}
//     <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
//       it Happen
//     </span>
//   </h1>
//   <p className="mt-2 text-black text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center max-w-2xl">
//     Where bold ideas become powerful innovations.
//   </p>

//   {/* Buttons container */}
//   <div className="relative mt-6  w-full">
//     {/* Left Button - Schedule a Demo (smaller screens on the left side) */}
//     <button className="bg-gradient-to-r from-purple-800 to-blue-950 text-white px-4 py-2 text-xs rounded-full hover:bg-blue-700 transition duration-300 ease-in-out absolute left-4 sm:bottom-[-0px] bottom-[-80px] sm:relative sm:mr-16 sm:mt-0 sm:ml-0 sm:px-6 sm:py-3 sm:text-base">
//       Schedule a Demo
//     </button>

//     {/* Right Button - Hire a Developer (smaller screens on the right side) */}
//     <button className="bg-gradient-to-r from-purple-800 to-blue-950 text-white px-4 py-2 text-xs rounded-full hover:bg-blue-700 transition duration-300 ease-in-out absolute right-4 sm:bottom-[-0px] bottom-[-80px] sm:relative sm:mt-0 sm:ml-4 sm:px-6 sm:py-3 sm:text-base">
//       Hire a Developer
//     </button>
//   </div>
// </div>




//         {/* Mobile Image */}
//         <img 
//           src={mobile} 
//           alt="Mobile" 
//           className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48 lg:w-[500px] animate-pulse"
//         />

//         {/* Ice1 Image */}
//         <img 
//           src={ice1} 
//           alt="Ice 1" 
//           className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 lg:w-[250px] animate-bounce"
//         />

//         {/* Ice2 Image */}
//         <img 
//           src={ice2} 
//           alt="Ice 2" 
//           className="absolute top-1/3 right-0 w-16 sm:w-24 md:w-32 lg:w-[450px] animate-bounce"
//         />
//       </div>

//       {/* Second Hero Frame */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-start mx-4 md:mx-16">
//         <div className="col-span-1 p-4 rounded-lg">
//           <h1 className='text-3xl md:text-4xl lg:text-5xl mb-3 text-indigo-950 font-bold'>Welcome Visionaries</h1>
//           <p className="text-black text-md md:text-lg lg:text-xl">
//             As a leading software development establishment, we turn complex challenges into innovative digital solutions. Be it Website development or App development, we empower organizations to innovate, automate, and grow in today's fast-paced digital ecosystem.
//           </p>
//         </div>

//         {/* Render first set of StatsCards */}
//         {firstStats.map((stat, index) => (
//           <StatsCard
//             key={index}
//             number={stat.number}
//             text={stat.text}
//             textsub={stat.textsub}
//             image={stat.image}
//             imageClassName="w-full h-full"
//             numberClassName="text-5xl sm:text-6xl md:text-[7rem] font-bold text-white"
//             textClassName="text-3xl sm:text-4xl md:text-5xl mt-2 text-white"
//             textsubClassName="text-3xl sm:text-4xl md:text-5xl mt-2 text-white"
//             duration={stat.duration}
//           />
//         ))}
//       </div>

//       {/* Full-width container for welcome3 and welcome4 */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-16">
//         {/* Render second set of StatsCards */}
//         {secondStats.map((stat, index) => (
//           <StatsCard
//             key={index}
//             number={stat.number}
//             text={stat.text}
//             image={stat.image}
//             imageClassName="w-full h-[240px] md:h-[360px]"
//             numberClassName="text-5xl sm:text-6xl md:text-[7rem] font-bold text-white"
//             textClassName="text-3xl sm:text-4xl md:text-5xl mt-2 text-white"
//             textsubClassName="text-3xl sm:text-4xl md:text-5xl mt-2 text-white"
//             duration={stat.duration}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import frame from "../assets/heroFrame.png";
import frame2 from "../assets/heroFrame2.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      {/* First image with sliding animation from left to right */}
      <div className="pr-40 pl-40 pt-20 animate-slideInLeft1">
        <img src={frame} alt="Frame 1" className="w-[100rem] max-w-full" />
      </div>
      
      {/* Second image with sliding animation from right to left */}
      <div className="mt-4 pt-10 pl-40 pr-40 animate-slideInRight">
        <img src={frame2} alt="Frame 2" className="w-[100rem] max-w-full" />
      </div>
    </div>
  );
}

export default Hero;


