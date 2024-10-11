import React from 'react';
import missionbg from "../assets/missionbg.png";
import missionright from "../assets/missionright.png";

const Mission = () => {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto mt-20">
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl text-blue-600 uppercase font-semibold mb-2">THE FUTURE BELONGS TO YOU</h2>
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Mission</h1>
        <p className="text-gray-600">
          Accelerate your business and jump into the new era with the help of a team of A-players.
        </p>
      </div> */}
      <img src={missionbg} alt="" className='mb-20' style={{width:"1200px", height:"150px"}}/>
      
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
          <h2 className="text-5xl text-start leading-[4rem] font-medium text-purple-950 mb-10">
            Driving Project Success No Matter What
          </h2>
          <p className="text-gray-800 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={missionright} alt="Mission visualization" className="rounded-lg shadow-lg " style={{width:"500px", height:"600px"}} />
        </div>
      </div>
    </div>
  );
};

export default Mission;