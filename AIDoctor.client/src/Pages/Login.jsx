import React from "react";
import image from "../assets/left-image.png";
import Logo from "../assets/logo";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-blue-100">    <div className="flex w-full h-screen overflow-hidden">
      {/* Left Section  */}
      <div className="hidden md:flex w-1/2 md:w-[50%] bg-gray-300 animate-slideIn">
        <img src={image} alt="Background" className="w-full h-screen object-cover" />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center  p-6">
        
        <div className="w-full max-w-[350px] max-h-[555px] p-6 mb-[45px] bg-white rounded-xl shadow-lg text-center opacity-0 animate-fadeIn">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 ml-[120px]">
            <Logo />
          </h2>
          <h3 className="text-xl font-bold mb-2">Welcome back</h3>
          <p className="text-gray-500 text-sm mb-5">Sign in to your account</p>

          <form className="text-left space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email address</label>
              <input type="email" placeholder="Enter your email" required className="w-full p-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="Enter your password" required className="w-full p-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Enter the code shown</label>
              <input type="text" placeholder="A7X9Q" required className="w-full p-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm" />
            </div>

            <div className="flex justify-between items-center text-xs text-gray-600">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-1 accent-blue-500 w-4 h-4" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/login/forgot-password" className="text-blue-500 hover:underline">Forgot password?</Link>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 mt-6 rounded-md text-lg font-semibold hover:bg-blue-700 transform transition duration-200 hover:scale-105 shadow-md">
              Sign in
            </button>

          </form>

          <p className="text-sm mt-4">
            Don’t have an account? <Link to="/signup" className="text-blue-500 hover:underline ">Sign up</Link>
          </p>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Protected by reCAPTCHA and subject to Privacy Policy and Terms of Service
          </p>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Login;
