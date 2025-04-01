import React from 'react';
import { Link } from 'react-router-dom';
export default function SignupPage3() {
  return (
    <div className="wholecontainer_2 flex justify-center items-center min-h-screen bg-blue-100 p-4">
      <div className="container_2 rounded-lg p-6 max-w-lg w-full mb-16 animate__animated animate__fadeInUp">
        <h2 className="title_2 text-2xl font-bold text-center mb-4 text-blue-600 hover:text-blue-700 transition-all duration-300">Two-Factor Authentication Setup</h2>
        
        {/* Progress Bar */}
        <div className="steps_11 flex items-center justify-between w-full mb-6 relative">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center w-1/3">
            <div className="step_11 w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold text-white bg-blue-500 z-10 relative hover:bg-blue-600 transition-all duration-300">
              1
            </div>
            <div className="absolute w-1/2 h-1 bg-blue-500 top-1/2 left-1/2 transform -translate-x-0 z-0"></div>
            <span className="text-sm text-gray-600 mt-2">Choose Method</span>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center w-1/3">
            <div className="step_11 w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold text-white bg-blue-500 z-10 relative hover:bg-blue-600 transition-all duration-300">
              2
            </div>
            <div className="absolute w-1/2 h-1 bg-blue-500 top-1/2 left-0 transform -translate-x-0 z-0"></div>
            <div className="absolute w-1/2 h-1 bg-blue-500 top-1/2 right-0 transform -translate-x-0 z-0"></div>
            <span className="text-sm text-gray-600 mt-2">Setup</span>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center w-1/3">
            <div className="step_11 w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold border-2 border-blue-500 text-white bg-blue-500 z-10 relative hover:bg-blue-600 transition-all duration-300">
              3
            </div>
            <div className="absolute w-1/2 h-1 bg-blue-500 top-1/2 left-0 transform -translate-x-0 z-0"></div>
            <span className="text-sm text-gray-600 mt-2">Verify</span>
          </div>
        </div>

        {/* QR Code and Setup Instructions */}
        <div className="card_2 bg-gray-50 p-4 rounded-lg border-t-4 border-blue-500 shadow-md transition-all duration-300 hover:shadow-lg hover:border-blue-600">
          <h3 className="text-lg font-semibold mb-2 text-blue-600 hover:text-blue-700">Set Up Your Authenticator App</h3>
          <p className="text-gray-600 mb-3">
            Scan the QR code below with your preferred authenticator app to link your account.
          </p>
          <div className="qr-container_2 flex justify-center mb-4">
            <img src="../../../public/DIV.svg" alt="QR Code" className="w-[160px] h-[160px] transition-all duration-300 hover:scale-105"/>
          </div>

          {/* Manual Setup */}
          <div className="manual-setup_2 space-y-3">
            <label className="block text-gray-700 font-medium">Can't scan? Manual Setup</label>

            {/* Secret Key Input */}
            <label className="block text-gray-700 font-medium">Secret Key</label>
            <div className="input-group_2 flex items-center space-x-2">
              <input
                type="text"
                defaultValue="ABCD EFGH IJKL MNOP"
                readOnly
                className="border border-gray-300 p-2 rounded w-full bg-gray-100 transition-all duration-300 hover:bg-gray-200"
              />
              <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-all duration-300">
                Copy
              </button>
            </div>

            {/* Token Type Dropdown */}
            <label className="block text-gray-700 font-medium">Token Type</label>
            <select className="select_2 border border-gray-300 p-2 rounded w-full bg-white transition-all duration-300 hover:bg-gray-100">
              <option>Time-based (TOTP)</option>
            </select>

            {/* Verification Code Input */}
            <label className="block text-gray-700 font-medium">Verification Code</label>
            <input
              type="text"
              placeholder="Enter 6-digit code"
              className="input-field_2 border border-gray-300 p-2 rounded w-full transition-all duration-300 hover:bg-gray-100"
            />
          </div>

          {/* Verify Button */}
          <button className="verify-btn_2 mt-4 bg-blue-500 text-white px-6 py-2 rounded w-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
            🔵 Verify Setup
          </button>

          {/* Navigation Buttons */}
          <div className="buttons_2 flex justify-between mt-4">
         <Link to="/signup/step-2">   <button className="back_2 text-blue-500 hover:underline transition-all duration-300">← Back</button></Link>
         <a href="#" className="help_2 text-blue-500 underline hover:text-blue-700 transition-all duration-300">
              Need help?
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer_2 text-center text-gray-500 mt-4">
          © 2024 Your Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
