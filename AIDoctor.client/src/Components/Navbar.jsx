import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo.jsx';

const Navbar = ({ colour }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${colour} opacity-[1] shadow-md shadow-[rgba(0,0,0,0.1)] py-2 px-6 flex justify-between items-center w-full relative z-12`}>
      {/* Logo and Title */}
      <div className="flex items-center gap-15 ml-10">
        <div className='flex items-center gap-6'>
        <div className="w-10 h-10 flex items-center">
          <Logo />
        </div>
        <span className="text-xl font-bold text-blue-900">AI Doctor</span>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 text-4xl z-20"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex items-center gap-10 text-base text-gray-700 font-medium md:static md:bg-transparent md:shadow-none md:p-0 md:w-auto transition-all duration-300 ease-in-out
          absolute left-0 top-full w-full bg-blue-100 shadow-md px-5 py-3 z-10  ${menuOpen ? 'block' : 'hidden'
            }`}>
          <li className="hover:text-blue-600 cursor-pointer font-bold">
            <Link to="/index">Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer font-bold">Services</li>
          <li className="hover:text-blue-600 cursor-pointer font-bold">About</li>
          <li className="hover:text-blue-600 cursor-pointer font-bold">Contact</li>
          <li className="hover:text-blue-600 cursor-pointer font-bold">
            <Link to="/premium-plans">Pricing</Link>
          </li>
        </ul>
      </div>



      {/* Auth Buttons */}
      <div className="hidden md:flex gap-6 mr-9">
        <Link to="/login">
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition text-base">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-base">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Mobile Auth Buttons */}
      <div
        className={`md:hidden ${menuOpen ? 'block' : 'hidden'
          } mt-4 flex flex-col gap-4`}>
        <Link to="/login">
          <button className="border border-blue-500 text-blue-500 w-full py-3 rounded-lg hover:bg-blue-500 hover:text-white transition text-base">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition text-base">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
