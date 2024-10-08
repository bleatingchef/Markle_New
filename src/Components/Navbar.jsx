import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaCaretDown } from 'react-icons/fa'; // Import the caret down icon
import dropimage from "../assets/dropimage.png"; // Import the dropdown image

// Import logo image
import logo from '../assets/logoblack.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for controlling the dropdown
  const dropdownRef = useRef(null); // Reference to the dropdown menu

  // Toggle the main burger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dropdown menu for About section
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Define navItems with no background images
  const navItems = [
    {
      path: '/about',
      label: 'About',
      dropdown: [
        { path: '/about/company', label: 'About Company' },
        { path: '/about/mission', label: 'Mission' },
        { path: '/about/client-reviews', label: 'Client Reviews' },
        { path: '/about/faq', label: 'FAQ' },
        { path: '/about/careers', label: 'Careers' },
        { path: '/about/project-success-measurement', label: 'Project Success Measurement' },
      ],
    },
    { path: '/service', label: 'Services' },
    { path: '/industry', label: 'Industries' },
    { path: '/solution', label: 'Solutions' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contactus', label: 'Contact Us' },
  ];

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
            <div className="hidden md:flex items-center">
              {navItems.map((item) => (
                <div key={item.path} className="relative group right-[0px] font-semibold text-md">
                  {/* Main nav item */}
                  {item.dropdown ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={toggleDropdown}
                        className="relative px-3 py-2 transition-colors duration-200 text-gray-700 hover:text-blue-600 flex items-center"
                      >
                        {item.label}
                        <FaCaretDown className="ml-1" /> {/* Dropdown arrow icon */}
                      </button>

                      {/* Dropdown menu */}
                      {isDropdownOpen && (
                        <div className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-xl rounded-3xl z-10 p-6 w-[700px] flex">
                          {/* Image on the left side */}
                          <img src={dropimage} alt="Dropdown Graphic" className="w-24 h-24 mr-4" />
                          <div className="grid grid-cols-2 gap-8">
                            {item.dropdown.map((subItem) => (
                              <NavLink
                                key={subItem.path}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                onClick={() => setIsDropdownOpen(false)} // Close dropdown when a link is clicked
                              >
                                {subItem.label}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `relative px-3 py-2 transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          <div
            className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-2 space-y-2 bg-white`}
          >
            {navItems.map((item) => (
              <div key={item.path}>
                {/* Main mobile nav item */}
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `block px-4 py-2 transition-colors duration-200 ${isActive ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>

                {/* Dropdown for mobile view */}
                {item.dropdown && (
                  <div className="pl-4 space-y-2">
                    {/* Dropdown button for mobile */}
                    <div className="relative">
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center"
                      >
                        <img src={dropimage} alt="Dropdown Graphic" className="w-16 h-16 mr-2" /> {/* Image for mobile */}
                        <span className="text-gray-700 hover:text-blue-600">{item.label} <FaCaretDown className="ml-1" /></span> {/* Dropdown arrow icon */}
                      </button>

                      {/* Dropdown menu for mobile */}
                      {isDropdownOpen && (
                        <div className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-xl rounded-3xl z-10 p-4 w-full flex flex-col">
                          {item.dropdown.map((subItem) => (
                            <NavLink
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                              onClick={() => setIsDropdownOpen(false)} // Close dropdown when a link is clicked
                            >
                              {subItem.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
