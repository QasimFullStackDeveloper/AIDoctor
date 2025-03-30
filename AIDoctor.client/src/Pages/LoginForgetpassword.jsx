import React from 'react';
import shieldIcon from '../../public/shield.svg';
import questionMark from '../../public/questionMark.svg';
import Logo from '../assets/logo';

export default function LoginForgetpassword() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full  bg-blue-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        {/* Logo */}
        <div className="flex justify-center mb-6 mr-[140px]">
          <Logo className="w-16 h-16" />
        </div>

        {/* Title & Description */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Forgot your password?
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          No worries! Enter your email to reset it.
        </p>

        {/* Form Section */}
        <div className="space-y-6">
          {/* Email Input */}
          <div className="relative flex items-center border border-gray-300 rounded-lg bg-gray-100 p-3 focus-within:ring-2 focus-within:ring-blue-500">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email icon" className="w-5 h-5 opacity-75 mr-2" />
            <input
              type="email"
              className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 text-sm"
              placeholder="Enter your email or username"
            />
          </div>

          {/* Actions (Back to login & Need Help) */}
          <div className="flex justify-between text-sm text-gray-700 font-medium">
            <a href="#" className="hover:underline flex items-center">← Back to login</a>
            <a href="#" className="flex items-center hover:underline">
              Need help? <img src={questionMark} alt="" className="w-4 h-4 ml-1 opacity-75" />
            </a>
          </div>

          {/* Reset Button */}
          <button className="bg-blue-600 text-white py-4 rounded-lg w-full font-semibold text-sm transition duration-300 hover:bg-blue-700 flex items-center justify-center gap-2 shadow-md">
            Send Reset Link <span className="text-lg">🚀</span>
          </button>
        </div>

        {/* Separator Line */}
        <hr className="border-t border-gray-300 my-6" />

        {/* Security Notice */}
        <div className="text-center text-xs text-gray-500 mb-4">Security Notice</div>

        {/* Notice Box */}
        <div className="bg-blue-100 p-4 rounded-lg text-xs text-blue-700 flex items-start shadow-sm">
          <img src={shieldIcon} alt="Info icon" className="w-4 h-4 mr-2 opacity-75" />
          <span>For your security, a password reset link will be sent to your email address. The link will expire in 30 minutes.</span>
        </div>
      </div>
    </div>
  );
}
