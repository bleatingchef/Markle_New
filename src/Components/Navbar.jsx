import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Importing icons from react-icons
import logo from '../assets/logo.png';
import logoblack from '../assets/logoblack.png';
import aboutnav from '../assets/aboutnav.png'; 
import servicenav from '../assets/servicenav.png'; 
import industrynav from '../assets/industrynav.png'; 
import solutionnav from '../assets/solutionnav.png'; 
import pricingnav from '../assets/pricingnav.png'; 
import contactnav from '../assets/contactnav.png'; 
import years from '../assets/8years.png';
import { NavLink } from 'react-router-dom';

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
          <NavLink to="/">
            <img src={logoblack} alt="Markle Tech Logo" className="w-80 ml-20" />
          </NavLink>
        </div>
        <div className="flex space-x-28">
          {/* Navbar links with corresponding background images */}
          {[
            { path: '/about', label: 'About', bgImage: aboutnav },
            { path: '/service', label: 'Services', bgImage: servicenav },
            { path: '/industry', label: 'Industries', bgImage: industrynav },
            { path: '/solution', label: 'Solutions', bgImage: solutionnav },
            { path: '/pricing', label: 'Pricing', bgImage: pricingnav },
            { path: '/contactus', label: 'Contact Us', bgImage: contactnav },
          ].map((navItem) => (
            <div key={navItem.path} className="relative group ">
              <NavLink 
                to={navItem.path} 
                className="text-black text-xl hover:text-purple-700 relative z-10"
              >
                {navItem.label}
              </NavLink>
              {/* Background image that appears on hover */}
              <div 
                className="absolute inset-0 bg-no-repeat bg-contain bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  backgroundImage: `url(${navItem.bgImage})`,
                  backgroundSize: '80%', // Increase size here
                  backgroundPosition: 'center', // Adjust position if needed
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
