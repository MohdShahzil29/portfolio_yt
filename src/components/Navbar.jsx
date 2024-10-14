import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path if needed

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="AeroVision Logo" className="w-[7rem] h-8" />
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">About Me</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Services</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Blog</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Contact Me</a>
        </div>

        {/* Button */}
        <div>
          <a href="#" className="bg-[#0077FF] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Let's chat
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
