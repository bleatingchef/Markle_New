import React from 'react';
import mapimage from "../assets/mapimg2.png"; // Replace with your exact path

// const markers = [
//   {
//     name: "India",
//     style: { top: "50%", left: "64.5%" },
//   },
//   {
//     name: "USA",
//     style: { top: "40%", left: "20%" },
//   },
// ];

const Map = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">
        Global Reach, Local Expertise: We Code In All Languages Of Success
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-xl">
        We are empowering global innovation with tailored software/app solutions.
        Bridging cultures, languages, and distances for business success worldwide.
      </p>
      <div
        className="relative w-full h-72 sm:h-96 md:h-[500px] lg:h-[600px] bg-center opacity-90 max-w-6xl mx-auto"
        style={{
          backgroundImage: `url(${mapimage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* {markers.map(({ name, style }) => (
          <div
            key={name}
            className="absolute flex flex-col items-center transform"
            style={style}
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white"></div>
            <span className="mt-2 text-xs sm:text-sm md:text-lg text-black">{name}</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Map;
