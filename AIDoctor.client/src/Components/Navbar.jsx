import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo.jsx';

const Navbar = ({ colour }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${colour} py-2 px-4 lg:px-10 2xl:px-20 2xl:py-4 w-full z-20 shadow-md overflow-x-hidden`}>
      <div className="max-w-[1920px] mx-auto flex justify-between items-center relative">

        {/* Logo and Nav Links */}
        <div className="flex items-center gap-10 2xl:gap-16">
          <div className="flex items-center gap-4 ml-4 lg:ml-5 2xl:gap-6">
            <div className="w-10 h-10 2xl:w-14 2xl:h-14 flex items-center">
              <Logo />
            </div>
            <span className="text-xl font-bold text-blue-900 sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
              AI Doctor
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 2xl:gap-14 text-base sm:text-sm lg:text-base 2xl:text-2xl ml-8 text-gray-700">
            <li className="hover:text-blue-600 font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 font-bold cursor-pointer">Services</li>
            <li className="hover:text-blue-600 font-bold cursor-pointer">About</li>
            <li className="hover:text-blue-600 font-bold cursor-pointer">Contact</li>
            <li className="hover:text-blue-600 font-bold">
              <Link to="/premium-plans">Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-4 2xl:gap-6 mr-4 lg:mr-10">
          <Link to="/login">
            <button className="border border-blue-500 text-blue-500 px-5 py-2 sm:px-4 sm:py-1.5 lg:px-5 lg:py-2 2xl:px-6 2xl:py-3 rounded-lg hover:bg-blue-500 hover:text-white transition text-sm sm:text-xs lg:text-sm 2xl:text-lg">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-600 text-white px-5 py-2 sm:px-4 sm:py-1.5 lg:px-5 lg:py-2 2xl:px-6 2xl:py-3 rounded-lg hover:bg-blue-700 hover:text-white transition text-sm sm:text-xs lg:text-sm 2xl:text-lg">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Burger Icon */}
        <button
          className="lg:hidden text-blue-900 text-3xl absolute right-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-blue-50 rounded-lg shadow-md mt-2 mx-4 px-4 py-4 space-y-3">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-medium hover:text-blue-600">
            Home
          </Link>
          <span onClick={() => setMenuOpen(false)} className="block text-gray-800 font-medium hover:text-blue-600 cursor-pointer">Services</span>
          <span onClick={() => setMenuOpen(false)} className="block text-gray-800 font-medium hover:text-blue-600 cursor-pointer">About</span>
          <span onClick={() => setMenuOpen(false)} className="block text-gray-800 font-medium hover:text-blue-600 cursor-pointer">Contact</span>
          <Link to="/premium-plans" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-medium hover:text-blue-600">
            Pricing
          </Link>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 mt-4">
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition text-sm">
                Login
              </button>
            </Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 hover:text-white transition text-sm">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
