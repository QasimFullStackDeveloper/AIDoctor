import React, { useState } from "react";
import Logo from "../assets/logo";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for the menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r bg-blue-300 text-white shadow-lg p-6 flex justify-between items-center w-full max-w-full mx-auto h-[100px] md:h-[120px] lg:h-[150px] transition-all duration-500 ease-in-out">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 md:w-20 md:h-20">
          <Logo />
        </div>
        <span className="text-4xl md:text-5xl font-extrabold text-white hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110">
          AI Doctor
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-4xl text-white hover:text-yellow-400 transition-all duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-20 left-0 w-full md:w-auto bg-gradient-to-r from-blue-100 to-blue-300 md:bg-transparent shadow-lg md:shadow-none md:flex md:space-x-12 text-lg font-semibold p-6 md:p-0 transition-all duration-300 ease-in-out 
        ${menuOpen ? "block" : "hidden"}`}
      >
        <Link to="/">
          <li className="hover:text-yellow-400 cursor-pointer transition-all duration-300 ease-in-out">Home</li>
        </Link>
        <li className="hover:text-yellow-400 cursor-pointer transition-all duration-300 ease-in-out">Services</li>
        <li className="hover:text-yellow-400 cursor-pointer transition-all duration-300 ease-in-out">About</li>
        <li className="hover:text-yellow-400 cursor-pointer transition-all duration-300 ease-in-out">Contact</li>
        <Link to="/premium-plans">
          <li className="hover:text-yellow-400 cursor-pointer transition-all duration-300 ease-in-out">Premium</li>
        </Link>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-8">
        <Link to="/login">
          <button className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full shadow-2xl flex items-center w-full md:w-auto transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-yellow-400 hover:text-white">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-yellow-500 text-white px-10 py-4 rounded-full shadow-2xl flex items-center w-full md:w-auto transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-yellow-600">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
