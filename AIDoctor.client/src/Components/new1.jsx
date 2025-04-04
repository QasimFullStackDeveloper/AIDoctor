import { useState } from "react";
import { Mail, Lock, RefreshCcw } from "lucide-react";
import image from "../assets/left-image.png";
import Logo from "../assets/logo";
const LoginPage = () => {
  const [captcha, setCaptcha] = useState("A7X9Q");

  return (
    <div className="flex h-screen w-screen">
      {/* Left Side */}
      <div className="w-1/2 h-full relative">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-lg w-96">
            <Logo/>
          <h2 className="text-2xl font-semibold text-center mb-2">Welcome back</h2>
          <p className="text-gray-600 text-center mb-6">Sign in to your account</p>

          {/* Email */}
          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CAPTCHA */}
          <div className="mb-4 relative">
            <div className="flex justify-between items-center bg-gray-200 p-2 rounded-md">
              <span className="font-mono text-lg tracking-widest">{captcha}</span>
              <button onClick={() => setCaptcha("NEW_CAPTCHA")}> {/* Implement captcha refresh logic */}
                <RefreshCcw size={18} className="text-gray-500" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter the code above"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Sign in</button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
