import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaCaretDown } from 'react-icons/fa'; 
import { Code } from 'lucide-react';
import dropimage from "../assets/dropimage.png"; 
import logo from '../assets/logoblack.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1118) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
    setIsAnimating(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setIsAnimating(false);
    }, 300); // 300ms delay before closing
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDropdownMouseLeave = () => {
    handleMouseLeave();
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsAnimating(false);
    setIsOpen(false);
  };

  const navItems = [
    {
      label: 'About',
      dropdown: [
        { path: '/about/company', label: 'About Company' },
        { path: '/about/mission', label: 'Mission' },
        { path: '/about/client-reviews', label: 'Client Reviews' },
        { path: '/about/faq', label: 'FAQ' },
        { path: '/about/careers', label: 'Careers' },
        { path: '/about/become-our-agent', label: 'Become Our Agent' },
      ],
    },
    {
      label: 'Services',
      dropdown: [
        { path: '/service/software-development', label: 'Software Development' },
        { path: '/service/ui-ux-design', label: 'UI/UX Design' },
        { path: '/service/digital-marketing', label: 'Digital Marketing' },
        { path: '/service/mobile-app-development', label: 'Mobile App Development' },
        { path: '/service/devops-consulting', label: 'DevOps Consulting' },
        { path: '/service/mvp-development', label: 'MVP Development' },
        { path: '/service/testing-and-qa', label: 'Testing and QA' },
        { path: '/service/ecommerce', label: 'e-Commerce' },
        { path: '/service/low-code-no-code', label: 'Low Code - No Code' },
        { path: '/service/web-development', label: 'Web Development' },
        { path: '/service/saas-products', label: 'SaaS Products' },
        { path: '/service/all-services', label: 'See All Services' },
      ],
    },
    {
      label: 'Industries',
      dropdown: [
        { path: '/industry/finance-fintech', label: 'Finance & FinTech' },
        { path: '/industry/travel-hospitality', label: 'Travel & Hospitality' },
        { path: '/industry/real-estate-construction', label: 'Real Estate & Construction' },
        { path: '/industry/health-wellness', label: 'Health & Wellness' },
        { path: '/industry/transportation-logistics', label: 'Transportation & Logistics' },
        { path: '/industry/professional-services', label: 'Professional Services' },
        { path: '/industry/media-entertainment', label: 'Media & Entertainment' },
        { path: '/industry/retail-ecommerce', label: 'Retail & e-Commerce' },
        { path: '/industry/education', label: 'Education' },
        { path: '/industry/manufacturing', label: 'Manufacturing' },
        { path: '/industry/telecommunications', label: 'Telecommunications' },
        { path: '/industry/all-industries', label: 'View All Industries' },
      ],
    },
    {
      label: 'Solutions',
      dropdown: [
        { path: '/solution/erp', label: 'ERP' },
        { path: '/solution/elearning', label: 'e-Learning' },
        { path: '/solution/crm', label: 'CRM' },
        { path: '/solution/operations-management', label: 'Operations Management System' },
        { path: '/solution/cms', label: 'CMS' },
        { path: '/solution/ecommerce', label: 'E-Commerce' },
        { path: '/solution/supply-chain-management', label: 'Supply chain management' },
        { path: '/solution/web-portals', label: 'Web Portals' },
        { path: '/solution/ott-platform', label: 'OTT Platform' },
        { path: '/solution/fleet-management', label: 'Fleet Management' },
        { path: '/solution/financial-management', label: 'Financial Management' },
        { path: '/solution/project-management', label: 'Project Management System' },
        { path: '/solution/human-resources', label: 'Human Resources Management System' },
        { path: '/solution/hospital-management', label: 'Hospital Management System' },
        { path: '/solution/all-products', label: 'View All Products' },
      ],
    },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contactus', label: 'Contact Us' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
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
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <NavLink to='/' className="flex items-center space-x-2 text-gray-800">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
              {/* <span className="text-blue-600 font-medium">CodeBox</span> */}
            </NavLink>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-1 ">
              {navItems.map((item, index) => (
                <div 
                  key={item.path} 
                  className="relative group "
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 transition-colors duration-200 ${
                        isActive ? 'hover:text-blue-600' : ' hover:text-blue-600 '
                      } flex items-center`
                    }
                    onClick={handleLinkClick}
                  >
                    {item.label}
                    {item.dropdown && <FaCaretDown className="ml-1" />}
                  </NavLink>
                </div>
              ))}
            </div>

            {/* Burger menu button for mobile */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile navigation */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-2 space-y-2 bg-white`}>
            {navItems.map((item, index) => (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 transition-colors duration-200 ${
                      isActive ? 'text-blue-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>
      </header>

      {/* Animated Overlay and Dropdown */}
      {activeDropdown !== null && navItems[activeDropdown]?.dropdown && (
        <div 
          className="fixed inset-0 z-40"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          {/* <div className="fixed inset-0 bg-opacity-50 bg-red-300 transition-opacity duration-300" /> */}
          <div className="relative ">
            <div className="absolute left-0 right-0 top-[88px] bg-white border-t border-gray-200">
              <div 
                className="container mx-auto transform transition-transform duration-500 ease-out"
                style={{
                  animation: isAnimating ? 'dropDown 500ms ease-out forwards' : 'none'
                }}
              >
                <div className="max-w-7xl mx-auto py-8 px-4 rounded-b-2xl m-8 shadow-xl mt-10 h-72">
                  <div className="grid grid-cols-3 gap-6">
                    {navItems[activeDropdown]?.dropdown?.map((subItem, subIndex) => (
                      <div 
                        key={subIndex}
                        className="flex flex-col space-y-3"
                        style={{
                          animation: `fadeSlideIn 200ms ease-out ${subIndex * 100}ms forwards`,
                          opacity: 0,
                          transform: 'translateY(-20px)'
                        }}
                      >
                        <NavLink
                          to={subItem.path}
                          className="hover:text-blue-600 text-center text-lg"
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blinking download message */}
      <div className="fixed top-[88px] left-0 w-full z-30 bg-white">
        <p className="text-center blinking py-4">Don't Wait! Download The Specific Modules Marketing Deck Today! Download Now!</p>
      </div>

      {/* Add padding to the top of the content to prevent overlap */}
      <div className="pt-[128px]">
        {/* Your page content goes here */}
      </div>

      <style jsx>{`
        @keyframes dropDown {
          0% {
            transform: scaleY(0);
            transform-origin: top;
          }
          100% {
            transform: scaleY(1);
            transform-origin: top;
          }
        }

        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .blinking {
          animation: blinker 1.5s linear infinite;
        }

        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;