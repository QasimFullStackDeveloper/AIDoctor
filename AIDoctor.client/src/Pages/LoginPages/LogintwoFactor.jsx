import React, { useState } from 'react';
// import '../Styles/LogintwoFactor.css';

export default function LogintwoFactor() {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-[380px] md:w-[420px] lg:w-[450px] xl:w-[500px] border-t-4 border-blue-500 animate-fadeIn">
        <div className="font-bold text-xl text-[#3f51b5] uppercase mb-4">
          LOGO
        </div>
        <div className="text-lg font-semibold text-gray-900 mb-2">
          Two-Factor Authentication
        </div>
        <p className="text-sm text-gray-600 mb-5">
          Choose your preferred method to receive the code
        </p>

        {/* Option 1: Email Verification */}
        <div className="flex items-center p-3 border border-[#3f51b5] rounded-lg mb-3 cursor-pointer transition hover:bg-[#eef2ff]">
          <div className="bg-[#e8f5e9] w-10 h-10 flex justify-center items-center rounded-full mr-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="Email Icon"
              className="w-5"
            />
          </div>
          <div className="text-left text-sm">
            <strong>Email Verification</strong>
            <br />
            <span>Receive a code at your registered email address</span>
          </div>
        </div>

        {/* Option 2: Authenticator App */}
        <div className="flex items-center p-3 border border-[#3f51b5] rounded-lg mb-3 cursor-pointer transition hover:bg-[#eef2ff]">
          <div className="bg-[#e8f5e9] w-10 h-10 flex justify-center items-center rounded-full mr-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/705/705062.png"
              alt="Authenticator Icon"
              className="w-5"
            />
          </div>
          <div className="text-left text-sm">
            <strong>Authenticator App</strong>
            <br />
            <span>Enter the code from your preferred authenticator app</span>
          </div>
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={code}
          onChange={handleChange}
          maxLength="6"
          className="w-full sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] p-3 my-3 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Enter 6-digit code"
        />

        {/* Resend Code Text */}
        <p className="text-xs text-[#3f51b5] cursor-pointer flex justify-between">
          Resend code in 00:30 <span className="cursor-pointer">Resend Code</span>
        </p>

        {/* Verify Button */}
        <a
          href="#"
          className="bg-blue-500 text-white py-3 rounded-lg block text-center mt-4 transition-transform transform hover:scale-105 hover:bg-[#303f9f] animate-fadeIn"
        >
          Verify
        </a>

        {/* Back to Login Button */}
        <a
          href="#"
          className="bg-blue-500 text-white py-3 rounded-lg block text-center mt-3 transition-transform transform hover:scale-105 animate-slideUp"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
}
