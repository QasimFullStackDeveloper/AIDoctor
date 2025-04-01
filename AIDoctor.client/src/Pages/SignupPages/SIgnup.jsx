import React from "react";
import image from "../../assets/left-image.png";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo";

export default function Signup() {
  return (
    <div className="bg-blue-100">
      <div className="flex w-full h-screen overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex w-1/2 md:w-[50%] bg-gray-300 animate-slideIn">
          <img src={image} alt="Background" className="w-full h-screen object-cover" />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center p-6">
          <div className="w-full max-w-[350px] max-h-[555px] p-6 mb-5 bg-white rounded-xl shadow-lg text-center opacity-0 animate-fadeIn">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              <Logo />
            </h2>
            <h3 className="text-xl font-bold mb-2">Create Your Account</h3>
            <p className="text-gray-500 text-sm mb-5">Get personalized healthcare support</p>

            <form className="text-left space-y-4">
              <div className="flex gap-3">
                <input type="text" placeholder="First name" required className="w-1/2 p-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm" />
                <input type="text" placeholder="Last name" required className="w-1/2 p-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm" />
              </div>

              <div>
                <input type="email" placeholder="Email address" required className="w-full p-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm" />
              </div>

              <div>
                <input type="password" placeholder="Password" required className="w-full p-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Enter the code shown</label>
                <input type="text" placeholder="A7X9Q" required className="w-full p-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm" />
              </div>

              <div className="flex items-center text-xs text-gray-600">
                <input type="checkbox" id="terms" className="mr-2 accent-blue-500 w-4 h-4" />
                <label htmlFor="terms">I agree to the <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a></label>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white p-2 mt-4 rounded-md text-lg font-semibold hover:bg-blue-700 transform transition duration-200 hover:scale-105 shadow-md">
                Create Account
              </button>
            </form>

            {/* Centered and properly aligned text */}
            <div className="flex justify-center items-center mt-3">
              <p className="text-sm">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
              </p>
            </div>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Your data is encrypted and secured.
            </p>
            <p className="text-xs text-gray-500 mt-1 text-center">
              For help or support, contact at <a href="#" className="text-blue-500 hover:underline">support@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
