import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Importing icons from react-icons
import logo from '../assets/logo.png';
import years from '../assets/8years.png';

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top section with contact info divided into 4 parts */}
      <div className="bg-purple-950 text-white flex justify-between items-center px-8 py-1">
        <div className="flex space-x-8 items-center">
          <img src={years} alt="8 Years" className="w-10" />
        </div>

        <div className="flex items-center">
          <p className="text-s">contact@markletech.com</p>
        </div>
        <span className=''>|</span>
        <div className="flex items-center">
          <p className="text-s">IN: +91-7982 332 070</p>
        </div>
        <span className=''>|</span>
        <div className="flex items-center">
          <p className="text-s">USA: +1-628 277 4060</p>
        </div>
        <div className="flex space-x-4 text-white">
          {/* Social media icons from react-icons */}
          <a href="#"><FaInstagram className="text-xl" /></a>
          <a href="#"><FaFacebook className="text-xl" /></a>
          <a href="#"><FaLinkedin className="text-xl" /></a>
          <a href="#"><FaYoutube className="text-xl" /></a>
        </div>
      </div>

      {/* Bottom section with logo and navigation */}
      <div className="flex justify-between items-center px-8 py-6">
        <div>
          {/* Logo */}
          <img src={logo} alt="Markle Tech Logo" className="w-80 ml-20" />
        </div>
        <div className="flex space-x-28">
          {/* Navbar links */}
          <a href="#" className="text-black text-xl hover:text-purple-700">Home</a>
          <a href="#" className="text-black text-xl hover:text-purple-700">Services</a>
          <a href="#" className="text-black text-xl hover:text-purple-700">Industries</a>
          <a href="#" className="text-black text-xl hover:text-purple-700">Solutions</a>
          <a href="#" className="text-black text-xl hover:text-purple-700">Pricing</a>
          <a href="#" className="text-black text-xl hover:text-purple-700">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
