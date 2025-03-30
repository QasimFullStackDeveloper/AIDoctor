import React from "react";
import Logo from "../assets/logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-100 shadow-md p-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8"><Logo/></div>
        <span className="text-xl font-bold text-blue-900">AI Doctor</span>
      </div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <Link to="/"> <li className="hover:text-blue-600 cursor-pointer">Home</li></Link>
        <li className="hover:text-blue-600 cursor-pointer">Services</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
       <Link to="/premium-plans">  <li className="hover:text-blue-600 cursor-pointer">Premium</li></Link>
      </ul>
      <div className="flex space-x-3">
        <Link to="/login">
        <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition">
          Login
        </button>
        </Link>
        <Link to="/signup">
        <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
