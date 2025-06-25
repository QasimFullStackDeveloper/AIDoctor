import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/DIV.svg";
import backArrow from "../../assets/leftArrow.svg";
import dropdownIcon from "../../assets/dropdown.svg";
import copy from "../../assets/copy.svg";
import tick from "../../assets/anotherTick.svg"

export default function SignupPage3() {
  const [showManualSetup, setShowManualSetup] = useState(false);

  const toggleManualSetup = () => {
    setShowManualSetup(!showManualSetup);
  };

  const verifyEmail = async () => {
    try {
      const response = await fetch("http://localhost:7282/Api/Auth/Account/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      const result = await response.json();
      console.log(" successful:", result);
    } catch (error) {
      console.error(" failed:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white px-4">
      {/* Main content centered vertically */}
      <div className="flex flex-col flex-grow items-center justify-center py-8">
        <div className="w-full max-w-[704px] md:max-w-[600px] flex flex-col items-center">
          <div className='text-2xl font-bold mb-3'>Two Factor Authentication Setup</div>

          {/* Progress Bar */}
          <div className="relative w-full mb-5">
            <div className="absolute top-[20px] ml-[2rem] mr-[1rem] left-0 right-0 h-1 bg-blue-500 z-0" />
            <div className="absolute top-[20px] left-[calc(66.66%-15px)] max-w-[70%] bg-blue-500 z-10 h-1" />
            <div className="flex justify-between items-center z-20 relative">
              <div className="flex flex-col items-center ml-[-1rem]">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">1</div>
                <span className="text-xs text-blue-400 font-bold mt-2 text-center">Choose Method</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">2</div>
                <span className="text-xs text-blue-400 font-bold mt-2 text-center">Setup App</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold border-2 border-blue-600">3</div>
                <span className="text-xs text-blue-400 font-bold mt-2 text-center">Verify</span>
              </div>
            </div>
          </div>

          {/* === Form Card === */}
          <div className="bg-white border-t-4 border-blue-600 shadow-md p-6 rounded-lg w-full mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-1 text-left">Set Up Your Authenticator App</h2>
            <p className="text-sm text-gray-600 mb-4 text-left">
              Scan the QR code below with your preferred authenticator app to link your account.
            </p>

            <div className="flex justify-center mb-6">
              <img src={image} alt="QR Code" className="w-40 h-40" />
            </div>

            {/* Blue Highlighted Section with Dropdown */}
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <div
                className="flex justify-between items-center cursor-pointer mb-2"
                onClick={toggleManualSetup}
              >
                <label className="text-sm font-medium text-gray-700 block text-left">
                  Can't scan? Manual Setup
                </label>
                <img
                  src={dropdownIcon}
                  alt="Toggle dropdown"
                  className={`w-4 h-4 transform transition-transform duration-300 ${showManualSetup ? "rotate-180" : "rotate-0"
                    }`}
                />
              </div>

              {showManualSetup && (
                <>
                  <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 block mb-1 text-left">Secret Key</label>
                    <div className="relative">
                      <input
                        type="text"
                        defaultValue="ABCD EFGH IJKL MNOP"
                        readOnly
                        className="w-full pr-24 p-2 border border-gray-300 rounded-md bg-white text-gray-700 text-sm"
                      />
                      <button
                        type="button"
                        className="absolute top-0 right-0 h-full px-3 border-1 border-gray-300 bg-gray-100 hover:bg-gray-200 flex items-center gap-1  text-sm font-medium"
                      >
                        <img src={copy} alt="Copy icon" className="w-4 h-4" />
                        Copy
                      </button>
                    </div>
                  </div>



                  <div className="mb-2">
                    <label className="text-sm font-medium text-gray-700 block mb-1 text-left">Token Type</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm text-gray-700">
                      <option>Time-based (TOTP)</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Verification Code Section - OUTSIDE colored box */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 block mb-1 text-left">Verification Code</label>
              <input
                type="text"
                placeholder="Enter 6-digit code"
                className="w-full p-2 border border-gray-300 rounded-md bg-white text-sm"
              />
            </div>

            <Link to="/signup/2fa-success">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2">
                <img src={tick} alt="Verify" className="w-4 h-4" />
                Verify Setup
              </button>
            </Link>

          </div>

          {/* === Navigation Buttons === */}
          <div className="flex justify-between items-center w-full px-2">
            <Link to="/signup/step-2">
              <button className="flex items-center gap-1 text-md text-gray-700 bg-white px-5 py-2 shadow hover:text-gray-900">
                <img src={backArrow} alt="" /> Back
              </button>
            </Link>
            <Link to="#">
              <button className="text-md text-blue-600 hover:text-blue-800">Need help?</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        © 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
}
