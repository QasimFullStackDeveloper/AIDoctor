import React from "react";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instragram.svg";
import Linkedin from "../assets/Linkedin.svg";
import Twitter from "../assets/Twitter.svg";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-6 pt-12">
        {/* Flex container to keep 4 items in a row */}
        <div className="flex flex-wrap justify-between gap-12">
          {/* Left Side - Logo and Description */}
          <div className="flex-1 min-w-[250px]">
            <div className="w-20 h-20">
              <Logo />
            </div>
            <p className="text-sm text-center lg:text-left text-gray-400">
              Your trusted AI healthcare companion, available 24/7 for reliable medical guidance and support.
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-all duration-300">Home</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Services</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">About</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-white font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-all duration-300">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-all duration-300">Cookie Policy</li>
            </ul>
          </div>

          {/* Right - Social Media Icons */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-white font-semibold text-lg mb-3">Connect</h3>
            <div className="flex space-x-2">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full">
                <img src={Twitter} alt="Twitter" className="w-6 h-6 transition-all duration-300 hover:scale-110" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full">
                <img src={Facebook} alt="Facebook" className="w-6 h-6 transition-all duration-300 hover:scale-110" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full">
                <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 transition-all duration-300 hover:scale-110" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full">
                <img src={Instagram} alt="Instagram" className="w-6 h-6 transition-all duration-300 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer with copyright */}
        <div className="mt-10">
          <div className="w-[100vw] border-t border-gray-700 relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
            <div className="max-w-screen-xl mx-auto py-4 text-center text-gray-500 text-sm px-6">
              &copy; 2025 Doctor AI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
