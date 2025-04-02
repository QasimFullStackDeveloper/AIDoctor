import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupPage2() {
  return (
    <div className="whole-container_11 bg-gradient-to-br bg-blue-100 flex flex-col items-center justify-between min-h-screen w-full overflow-hidden animate-fadeIn">
      <div className="container_11 text-center w-full max-w-xl p-1 rounded-lg animate-fadeInScale flex flex-col justify-between h-full">

        {/* Progress Bar */}
        <div className="steps_11 flex items-center justify-between w-full mb-6 relative animate-slideInFromLeft">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center w-1/3 animate-slideInFromLeft">
            <div className="step_11 w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold text-white bg-blue-500 z-10 relative">
              1
            </div>
            <div className="absolute w-1/2 h-1 bg-blue-500 top-1/2 left-1/2 transform -translate-x-0 z-0"></div>
            <span className="text-sm text-gray-600 mt-2">Choose Method</span>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center w-1/3 animate-slideInFromLeft">
            <div className="step_11 w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold text-white bg-blue-500 z-10 relative">
              2
            </div>
            <div className="absolute w-1/2 h-1 bg-blue-500 top-1/2 left-0 transform -translate-x-0 z-0"></div>
            <div className="absolute w-1/2 h-1 bg-white top-1/2 right-0 transform -translate-x-0 z-0"></div>
            <span className="text-sm text-gray-600 mt-2">Setup</span>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center w-1/3 animate-slideInFromLeft">
            <div className="step_11 w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold text-blue-500 border-2 border-blue-500 bg-white z-10 relative">
              3
            </div>
            <div className="absolute w-1/2 h-1 bg-white top-1/2 left-0 transform -translate-x-0 z-0"></div>
            <span className="text-sm text-gray-600 mt-2">Verify</span>
          </div>
        </div>

        {/* Authentication Setup Box */}
        <div className="card_2 bg-gray-50 p-2 rounded-lg border-t-4 border-blue-500 shadow-md animate-fadeInScale">
          <h3 className="text-lg font-semibold text-blue-500 mb-2">Set Up Your Authenticator App</h3>
          <p className="text-gray-600 mb-3">
            Scan the QR code below with your preferred authenticator app to link your account.
          </p>
          <div className="qr-container_2 flex justify-center mb-4">
            <img src="../../../public/DIV.svg" alt="QR Code" className="w-[160px] h-[160px] animate-pulse" />
          </div>

          {/* Manual Setup */}
          <div className="manual-setup_11 mt-4">
            <label className="text-md font-semibold text-gray-700 block mb-2 mr-[280px]">Can't scan? Manual Setup</label>
            <input
              type="text"
              defaultValue="ABCD EFGH IJKL MNOP"
              readOnly
              className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-700 mb-4 animate-slideInFromBottom"
            />

            <label className="text-md font-semibold text-gray-700 block mb-2 mr-[400px]">Token Type</label>
            <select className="w-full  p-2 border border-gray-300  rounded-lg bg-white text-gray-700 animate-slideInFromBottom">
              <option>Time-based (TOTP)</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="buttons_11 flex justify-between mt-6 animate-slideInFromBottom">
            <Link to="/signup/step-1"> 
              <button className="back_11 px-5 py-2 bg-gray-300 text-gray-800 rounded-lg font-bold hover:bg-gray-400 transition-transform transform hover:scale-105">
                ← Back
              </button>
            </Link>
            <Link to="/signup/step-3"> 
              <button className="continue_11 px-5 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-transform transform hover:scale-105">
                Continue → 
              </button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        {/* <footer className="footer_11 text-md text-gray-600 flex justify-center gap-6 mt-6 animate-slideInFromBottom">
          <span className="footer-link_11 cursor-pointer hover:underline hover:text-blue-500 transition-all duration-500">Help</span>
          <span className="footer-link_11 cursor-pointer hover:underline hover:text-blue-500 transition-all duration-500">Privacy Policy</span>
          <span className="footer-link_11 cursor-pointer hover:underline hover:text-blue-500 transition-all duration-500">Terms of Service</span>
        </footer> */}
      </div>
    </div>
  );
}
