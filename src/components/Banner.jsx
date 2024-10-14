import React from 'react';
import { FiDownload } from 'react-icons/fi'; // Importing icon from react-icons
import model from '../assets/model1.png'; // Ensure the correct path to your image

const Banner = () => {
  return (
    <section className="bg-white flex justify-center items-center px-[14rem] mt-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">

        {/* Left Side - Text Section */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-500 text-lg mb-2">Welcome to my Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi I’m <span className="text-blue-600">Robert Junior</span>
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Product Designer</h2>
          <p className="text-gray-600 mb-6">
            Collaborating with highly skilled individuals, our agency delivers top-quality services.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
              Hire Me!
            </a>
            <a href="#" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-blue-100 transition duration-300">
              <span>Download CV</span>
              <FiDownload />
            </a>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="flex-1 flex justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <img src={model} alt="Robert Junior" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
