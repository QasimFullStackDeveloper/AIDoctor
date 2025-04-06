import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

const Navbar = ({colour}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${colour} opacity-[1] shadow-md shadow-[rgba(0,0,0,0.1)] py-[0.8%] px-[3%] flex justify-between items-center w-full relative z-10`}>
      
      {/* Logo and Title */}
      <div className="flex items-center gap-[2vw]">
        <div className="w-[5vw] h-[5vw] flex items-center">
      <Logo/>
        </div>
        <span className="text-[1.8vw] font-bold text-blue-900">AI Doctor</span>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-blue-900 text-[7vw] z-20"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex items-center gap-[3vw] text-[1.4vw] text-gray-700 font-medium md:static md:bg-transparent md:shadow-none md:p-0 md:w-auto transition-all duration-300 ease-in-out
          absolute left-0 top-full w-full bg-blue-100 shadow-md px-[5%] py-[1.5%] z-10 ${
            menuOpen ? "block" : "hidden"
          }`}
      >
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">Services</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/premium-plans">Premium</Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="hidden md:flex gap-[2vw]">
        <Link to="/login">
          <button className="border border-blue-500 text-blue-500 px-[2vw] py-[0.6vw] rounded-lg hover:bg-blue-500 hover:text-white transition text-[1.2vw]">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-600 text-white px-[2vw] py-[0.6vw] rounded-lg hover:bg-blue-700 transition text-[1.2vw]">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
