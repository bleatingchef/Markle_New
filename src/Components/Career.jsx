import React, { useState } from 'react';
import carrerbg from "../assets/careerbg.png";

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="mt-20">
        <img src={carrerbg} alt="Hero Frame" className="w-full h-auto object-cover" />
      </div>

      {/* Open Positions Section */}
      <div className="max-w-4xl mx-auto text-center mt-10">
        <h2 className="text-6xl font-bold text-indigo-950 mb-6">Open Positions</h2>
        <ul className="space-y-6">
          {positions.map((position, index) => (
            <li key={index} className="p-4 border-b border-gray-300 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center ">
                <div className="text-left w-3/4">
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                  <p className="text-gray-500">{position.details}</p>
                  <hr className="border-gray-300 my-2 w-full" />
                </div>
                <div className="p-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <button
                    onClick={openModal}
                    className="bg-white border-2 border-transparent text-blue-500 py-2 px-4 rounded-full "
                  >
                    Apply Now
                  </button>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for Application Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Apply for the Position</h2>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input type="text" placeholder="Full Name" className="p-2 border rounded w-full" />
                <input type="email" placeholder="Email" className="p-2 border rounded w-full" />
              </div>
              <div className="flex space-x-4">
                <input type="tel" placeholder="Ph. Number" className="p-2 border rounded w-full" />
                <input type="text" placeholder="Experience" className="p-2 border rounded w-full" />
              </div>
              <div className="flex justify-center border p-4 rounded cursor-pointer">
                <input type="file" className="hidden" accept=".pdf" />
                <div className="text-center">
                  <p>📄 Upload Resume</p>
                </div>
              </div>
              <button type="submit" className="bg-purple-600 w-full text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
                Send Application
              </button>
            </form>
            <button onClick={closeModal} className="text-red-500 mt-4">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const positions = [
  { title: "Motion Graphics Artist (0-1 year)", details: "Full Time • Design" },
  { title: "Creative Director (8+ years)", details: "Full Time • Content" },
  { title: "Copywriter (2-3 years)", details: "Full Time • Content" },
  { title: "Brand Solutions Manager (1-3 years)", details: "Full Time • Marketing" },
  { title: "Graphic Designer (1-3 years)", details: "Full Time • Design" },
  { title: "Associate Art Director (4-6 years)", details: "Full Time • Design" },
  { title: "Business Growth Manager (2-4 years)", details: "Full Time • Marketing" },
  { title: "Senior Brand Solutions Manager (4-5 years)", details: "Full Time • Marketing" },
  { title: "Associate Group Head – Brand Solutions (5-7 years)", details: "Full Time • Marketing" },
];

export default Career;
