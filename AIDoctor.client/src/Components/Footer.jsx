import React from "react";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instragram.svg";
import Linkedin from "../assets/Linkedin.svg";
import Twitter from "../assets/Twitter.svg";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full overflow-x-hidden IpadPro:pb-[220px] IpadAir:pb-[40px] surfacePro:pb-[220px] Zenbook:pb-[125px]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pt-12 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          <div className="text-center sm:text-left">
            <div className="w-20 h-20 mx-auto sm:mx-0 mb-3">
              <Logo />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted AI healthcare companion, available 24/7 for reliable medical guidance and support.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Connect</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <img src={Twitter} alt="Twitter" className="w-6 h-6 hover:scale-110 transition-transform" />
              <img src={Facebook} alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform" />
              <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
              <img src={Instagram} alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* Copyright aligned to bottom */}
        <div className="w-[100vw] border-t border-gray-700 relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] mt-10 pt-2">
          <p className="text-center text-sm text-gray-500">
            &copy; 2025 Doctor AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
