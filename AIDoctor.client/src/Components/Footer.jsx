import React from "react";
import Facebook from "../../public/Facebook.svg";
import Instagram from "../../public/Instragram.svg";
import Linkedin from "../../public/Linkedin.svg";
import Twitter from "../../public/Twitter.svg";
import Logo from "../assets/logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Left Side - Logo and Description */}
        <div className="w-full md:w-1/3">
          <div className="w-10 h-10 mb-3">
            <Logo />
          </div>
          <p className="text-sm">
            Your trusted AI healthcare companion, available 24/7 for reliable medical guidance and support.
          </p>
        </div>

        {/* Middle - Quick Links & Legal */}
        <div className="w-full md:w-1/3 flex flex-col md:flex-row justify-around md:mt-0 space-y-6 md:space-y-0">
          <div>
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Right - Social Media Icons */}
        <div className="w-full md:w-1/3 mt-4 md:mt-0 flex flex-col items-center md:items-start">
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <div className="flex space-x-3">
            <img src={Twitter} alt="Twitter" className="w-6 h-6" />
            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
            <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
            <img src={Instagram} alt="Instagram" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; 2024 Doctor AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
