import React from 'react';
import contactusbg from "../../assets/contactusImages/contactusbg.png";
import astro from "../../assets/contactusImages/astro.png";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Section with 3D Character */}
      <div className="w-full  mb-8">
        {/* <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-700 pt-8">Contact Us</h1>
        </div> */}
       <div className="pr-40 pl-40 pt-20 animate-slideInLeft1">
        <img src={contactusbg} alt="Frame 1" className="w-[100rem] max-w-full" />
      </div>
      </div>

      {/* Get in Touch Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16 mt-16">
        <div className="text-center mb-8">
          <h2 className="text-6xl text-purple-900 mb-3">Get in touch</h2>
          <p className="text-gray-600 text-xl">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-purple-950 rounded-2xl shadow-xl overflow-hidden mx-4 lg:mx-auto max-w-6xl h-[38rem]">
          <div className="flex flex-col lg:flex-row">
            {/* Form Section */}
            <div className="w-full lg:w-1/2 p-8">
              <div className="mb-6">
                <h3 className="text-3xl font-semibold text-white mb-2">
                  Let's connect constellations
                </h3>
                <p className="text-purple-200 text-medium">
                  Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
                </p>
              </div>

              <form className="space-y-5">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-1/2 px-4 py-3 bg-purple-800/50 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-1/2 px-4 py-3 bg-purple-800/50 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-purple-800/50 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-purple-800/50 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-6 bg-purple-800/50 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  Send it to the moon
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Astronaut Image Section */}
            <div className="hidden lg:block w-1/2 relative">
              <img
                src={astro}
                alt="Astronaut floating in space"
                className="absolute inset-0 w-full h-[38rem] p-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;