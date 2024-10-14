import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from '../assets/logo.png'
import { IoLogoTwitter } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto flex justify-between items-center mt-9">
        {/* Left Side: Logo and Copyright */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="AeroVision Logo"
            width={60} // Adjust size as needed
            height={60}
            className="mr-2"
          />
          <span className="text-sm">
            &copy; Copyright 2023. All Rights Reserved.
          </span>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            {/* <FaXTwitter size={24} /> */}
            <IoLogoTwitter size={24} />

          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:info@aerovision.com" className="hover:text-gray-300">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
