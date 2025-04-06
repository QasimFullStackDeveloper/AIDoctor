import React from "react";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instragram.svg";
import Linkedin from "../assets/Linkedin.svg";
import Twitter from "../assets/Twitter.svg";
import Logo from "../assets/logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 pt-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 gap-x-12">
        {/* Left Side - Logo and Description */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-4">
          <div className="w-20 h-20 ">
            <Logo />
          </div>
          <p className="text-sm text-center lg:text-left text-gray-400">
            Your trusted AI healthcare companion, available 24/7 for reliable medical guidance and support.
          </p>
          <p className="text-sm text-center lg:text-left text-gray-400">
            Your trusted AI healthcare companion, available 24/7 for reliable medical guidance and support.
          </p>
        </div>

        {/* Middle - Quick Links & Legal */}
        <div className="w-full lg:w-1/3 flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer transition-all duration-300">Home</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Services</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">About</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer transition-all duration-300">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Right - Social Media Icons */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start mt-6 lg:mt-0">
          <h3 className="text-white font-semibold text-lg mb-3">Connect</h3>
          <div className="flex space-x-8">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-gray-600 transition-all duration-300">
              <img src={Twitter} alt="Twitter" className="w-6 h-6 transition-all duration-300 hover:scale-110" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-gray-600 transition-all duration-300">
              <img src={Facebook} alt="Facebook" className="w-6 h-6 transition-all duration-300 hover:scale-110" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-gray-600 transition-all duration-300">
              <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 transition-all duration-300 hover:scale-110" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-gray-600 transition-all duration-300">
              <img src={Instagram} alt="Instagram" className="w-6 h-6 transition-all duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line and Text */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; 2024 Doctor AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
