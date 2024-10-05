import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

// Import all images
import logo from '../assets/logoblack.png';
import aboutnav from '../assets/aboutnav.png';
import servicenav from '../assets/servicenav.png';
import industrynav from '../assets/industrynav.png';
import solutionnav from '../assets/solutionnav.png';
import pricingnav from '../assets/pricingnav.png';
import contactnav from '../assets/contactnav.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define navItems with imported images
  const navItems = [
    { path: '/about', label: 'About', bgImage: aboutnav },
    { path: '/service', label: 'Services', bgImage: servicenav },
    { path: '/industry', label: 'Industries', bgImage: industrynav },
    { path: '/solution', label: 'Solutions', bgImage: solutionnav },
    { path: '/pricing', label: 'Pricing', bgImage: pricingnav },
    { path: '/contactus', label: 'Contact Us', bgImage: contactnav },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full shadow-md">
      {/* Top section with contact info */}
      <div className="hidden md:block bg-purple-950 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <a href="mailto:contact@markletech.com" className="hover:text-blue-600">
                contact@markletech.com
              </a>
              <span className="hidden lg:inline">|</span>
              <span className="hidden lg:inline">IN: +91-7982 332 070</span>
              <span className="hidden lg:inline">|</span>
              <span className="hidden lg:inline">USA: +1-628 277 4060</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-pink-600">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-600">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to='/'><img src={logo} alt="Logo" className="h-12 w-auto" /></NavLink>
              
            </div>

            {/* Burger menu button for mobile */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    relative group px-3 py-2 transition-colors duration-200
                    ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
                  `}
                >
                  {item.label}
                  <div
                    className="absolute inset-0 bg-cover bg-center w-20 h-16 opacity-0 group-hover:opacity-60 transition-opacity duration-200"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          <div
            className={`md:hidden ${
              isOpen ? 'block' : 'hidden'
            } py-2 space-y-2 bg-white`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  block px-4 py-2 transition-colors duration-200
                  ${isActive 
                    ? 'text-blue-600 bg-gray-50' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;