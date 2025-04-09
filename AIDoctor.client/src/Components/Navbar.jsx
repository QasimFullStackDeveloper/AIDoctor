import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo.jsx';

const Navbar = ({ colour }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${colour} py-2 px-4 md:px-10 shadow-md w-full z-20`}>
      <div className="max-w-[1920px] mx-auto flex justify-between items-center relative">
        {/* Left Section: Logo + Links */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4 ml-4 md:ml-10">
            <div className="w-10 h-10 flex items-center">
              <Logo />
            </div>
            <span className="text-xl font-bold text-blue-900">AI Doctor</span>
          </div>

          {/* Menu links */}
          <ul className={`hidden md:flex items-center gap-8 text-base text-gray-700 font-medium lg:text-xl`}>
            <li className="hover:text-blue-600 font-bold">
              <Link to="/index">Home</Link>
            </li>
            <li className="hover:text-blue-600 font-bold cursor-pointer">Services</li>
            <li className="hover:text-blue-600 font-bold cursor-pointer">About</li>
            <li className="hover:text-blue-600 font-bold cursor-pointer">Contact</li>
            <li className="hover:text-blue-600 font-bold">
              <Link to="/premium-plans">Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Auth Buttons (desktop) */}
        <div className="hidden md:flex gap-4 mr-4 md:mr-10">
          <Link to="/login">
            <button className="border border-blue-500 text-blue-500 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition text-sm 2xl:text-base">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm 2xl:text-base">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-blue-900 text-3xl absolute right-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-50 rounded-lg shadow-md mt-2 mx-4 px-4 py-4 space-y-3">
          <Link to="/index" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-medium hover:text-blue-600">
            Home
          </Link>
          <span className="block text-gray-800 font-medium hover:text-blue-600">Services</span>
          <span className="block text-gray-800 font-medium hover:text-blue-600">About</span>
          <span className="block text-gray-800 font-medium hover:text-blue-600">Contact</span>
          <Link to="/premium-plans" onClick={() => setMenuOpen(false)} className="block text-gray-800 font-medium hover:text-blue-600">
            Pricing
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="w-full border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition text-sm">
              Login
            </button>
          </Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
