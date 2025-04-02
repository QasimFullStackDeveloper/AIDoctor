import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupPage3() {
  return (
    <div className="whole-container_2 bg-gradient-to-br bg-blue-100 flex flex-col items-center justify-center h-screen w-full overflow-hidden">
      <div className="container_2 text-center w-full max-w-xl rounded-lg flex flex-col flex-grow-0 justify-between h-[95vh] transition-all duration-500 ease-in-out ">
        
        {/* Title with Animation */}
        <h2 className="title_2 text-lg font-bold text-center mb-3 text-blue-600 hover:text-blue-700 transition-all duration-300 animate-fadeIn">
          Two-Factor Authentication Setup
        </h2>

        {/* Progress Bar with Reduced Height */}
        <div className="steps_11 flex items-center justify-between w-full mb-3 relative">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center w-1/3">
            <div className="step_11 w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold text-white bg-blue-500 z-10 relative">
              1
            </div>
            <div className="absolute w-1/2 h-1 bg-blue-500 top-1/2 left-1/2 transform -translate-x-0 z-0"></div>
            <span className="text-xs text-gray-600 mt-1">Choose</span>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center w-1/3">
            <div className="step_11 w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold text-white bg-blue-500 z-10 relative">
              2
            </div>
            <div className="absolute w-1/2 h-1 bg-blue-500 top-1/2 left-0 transform -translate-x-0 z-0"></div>
            <div className="absolute w-1/2 h-1 bg-blue-500 top-1/2 right-0 transform -translate-x-0 z-0"></div>
            <span className="text-xs text-gray-600 mt-1">Setup</span>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center w-1/3">
            <div className="step_11 w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold border-2 border-blue-500 text-white bg-blue-500 z-10 relative">
              3
            </div>
            <div className="absolute w-1/2 h-1 bg-blue-500 top-1/2 left-0 transform -translate-x-0 z-0"></div>
            <span className="text-xs text-gray-600 mt-1">Verify</span>
          </div>
        </div>

        {/* QR Code and Setup Instructions */}
        <div className="card_2 bg-gray-50 p-3 rounded-lg border-t-4 border-blue-500 shadow-md animate-fadeIn">
          <h3 className="text-sm font-semibold mb-2 text-blue-600 hover:text-blue-700 transition-all duration-300">
            Set Up Your Authenticator App
          </h3>
          <p className="text-xs text-gray-600 mb-2">Scan the QR code below with your authenticator app.</p>

          {/* QR Code */}
          <div className="qr-container_2 flex justify-center mb-2">
            <img src="/DIV.svg" alt="QR Code" className="w-[130px] h-[130px] transition-all duration-300 hover:scale-105" />
          </div>

          {/* Manual Setup */}
          <div className="manual-setup_2 space-y-2">
            <label className="block text-gray-700 text-xs font-medium">Manual Setup</label>

            {/* Secret Key Input */}
            <label className="block text-gray-700 text-xs font-medium">Secret Key</label>
            <div className="input-group_2 flex items-center space-x-2">
              <input type="text" defaultValue="ABCD EFGH IJKL MNOP" readOnly className="border border-gray-300 p-2 rounded w-full bg-gray-100 text-xs transition-all duration-300 hover:bg-gray-200" />
              <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition-all duration-300">
                Copy
              </button>
            </div>

            {/* Token Type Dropdown */}
            <label className="block text-gray-700 text-xs font-medium">Token Type</label>
            <select className="select_2 border border-gray-300 p-1 rounded w-full bg-white text-xs transition-all duration-300 hover:bg-gray-100">
              <option>Time-based (TOTP)</option>
            </select>

            {/* Verification Code Input */}
            <label className="block text-gray-700 text-xs font-medium">Verification Code</label>
            <input type="text" placeholder="Enter 6-digit code" className="w-full p-2 border border-gray-300 rounded-lg bg-white text-xs mb-2 transition-all duration-300 hover:bg-gray-100" />

           <Link to="/signup/2fa-success" > <button className="verify-btn_2 mt-1 w-full bg-blue-500 text-white px-4 py-1 rounded-lg font-bold text-sm hover:bg-blue-600 transition-all duration-300 animate-fadeIn">
              Verify Setup
            </button></Link>
          </div>

          {/* Navigation Buttons */}
          <div className="buttons_2 flex justify-between mt-3 text-xs">
            <Link to="/signup/step-2">
              <button className="back_2 text-blue-500 hover:underline hover:text-blue-700 transition-all duration-300">← Back</button>
            </Link>
            <Link to="">
              <button className="help_2 text-blue-500 underline hover:text-blue-700 transition-all duration-300">Need help?</button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer_2 text-center text-gray-500 text-xs mt-2">
          © 2024 Your Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
