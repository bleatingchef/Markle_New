import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importing icons
import logo from "../assets/logo.png";
import india from "../assets/indian.png";
import amra from "../assets/amra.png";
import shemaroo from "../assets/shemaroo.png";
import iod from "../assets/iod.png";

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trusted by Organizations Section */}
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-white mb-8 text-center">Trusted by the world's leading organizations</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {/* Organization Logos */}
            <div className="w-28 h-16 md:w-32">
              <img src={india} alt="IndianOil Logo" className="h-full object-contain" />
            </div>
            <div className="w-28 h-16 md:w-32">
              <img src={iod} alt="IOD Logo" className="h-full object-contain" />
            </div>
            <div className="w-28 h-16 md:w-32">
              <img src={shemaroo} alt="Shemaroo Logo" className="h-full object-contain" />
            </div>
            <div className="w-28 h-16 md:w-32">
              <img src={amra} alt="Amaravathi Logo" className="h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Footer Main Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          {/* Left Section - Logo and description */}
          <div className="mb-6 md:mb-0">
            {/* Replace the src with your MarkleTech logo */}
            <img src={logo} alt="MarkleTech Logo" className="w-56 h-16 mb-4" />
            <p className="text-gray-300 max-w-xs mx-auto md:mx-0">
              Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest products, special promotions, and exciting updates.
            </p>
            <div className="flex mt-4 space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">Pinterest</a>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Employee Database</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Payroll</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Absences</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Time Tracking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shift Planner</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Recruiting</a></li>
              </ul>
            </div>

            {/* Information Links */}
            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Lift Media</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal line */}
        <hr className="border-t border-gray-500 mb-6" />

        {/* Footer Bottom - Single Line */}
        <div className="flex flex-col md:flex-row justify-between items-center flex-wrap text-gray-400 space-y-4 md:space-y-0">
          {/* Copyright text */}
          <div className="text-center md:text-left">
            <p>Copyright © 2014 - 2024. All Rights Reserved by Markle Tech & Media Pvt. Ltd.</p>
          </div>

          {/* Terms, Privacy, Cookies Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
