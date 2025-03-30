import React from "react";
import image from "../assets/left-image.png";
import Logo from "../assets/logo";

const Login = () => {
  return (

    <div className="container_13 flex w-full h-screen overflow-hidden ">
      {/* Left Section */}

      <div className="left-section_13 flex-1 bg-gray-300 animate-slideIn hidden md:block">
        <img src={image} alt="Background" className="background-image_13 w-full h-screen object-cover" />
      </div>

      {/* Right Section */}
      <div className="right-section_13 flex-1 flex justify-center items-center bg-[#f4f7fc] p-5">
        <div className="login-box_13 w-full max-w-[380px] p-10 bg-white ml-[-20px] rounded-xl shadow-lg text-center opacity-0 animate-fadeIn">
          <h2 className="logo_13 text-2xl font-bold text-blue-600 mb-2">
            <div className="ml-[-20px]">
            <Logo />
            </div>
          </h2>
          <h3 className="welcome-text_13 text-xl font-bold mb-2">Welcome back</h3>
          <p className="subtext_13 text-gray-500 text-sm mb-5">Sign in to your account</p>

          <form className="form_13 text-left space-y-4">
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

            <div className="remember-forgot_13 flex justify-between items-center text-xs text-gray-600">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-1 accent-blue-500 w-4 h-4" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-3 mt-4 rounded-md text-lg font-semibold hover:bg-blue-700 transform transition duration-200 hover:scale-105 shadow-md">Sign in</button>
          </form>

          <p className="signup-text_13 text-sm mt-4">
            Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>

          <p className="footer-text_13 text-xs text-gray-500 mt-3 text-center">
            Protected by reCAPTCHA and subject to Privacy Policy and Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
