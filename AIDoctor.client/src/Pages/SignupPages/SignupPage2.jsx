import React from 'react';
import { Link } from 'react-router-dom';
import backArrow from "../../assets/leftArrow.svg";
import forwardArrow from "../../assets/whiteRightArrow.svg";
import copyIcon from "../../assets/copy.svg";
import image from "../../assets/DIV.svg";

export default function SignupPage2() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4">
      <div>
      <div className="w-full max-w-2xl flex flex-col items-center">

        <div className="relative w-full mb-8 ">

          <div className="absolute top-[20px] ml-[2rem] mr-[1rem] left-0 right-0 h-1 bg-blue-500 z-0" />

         <div className="absolute top-[20px] left-[calc(33.33%-15px)] max-w-[70%] bg-blue-500 z-10" />

          {/* Circles */}
          <div className="flex justify-between items-center z-20 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center ml-[-1rem]">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">1</div>
              <span className="text-xs text-gray-600 mt-2 text-center">Choose Method</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">2</div>
              <span className="text-xs text-gray-600 mt-2 text-center">Setup App</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-600 font-bold border-2 ">3</div>
              <span className="text-xs text-gray-600 mt-2 text-center">Verify</span>
            </div>
          </div>
        </div>

        {/* === Authenticator Form Card === */}
        <div className="bg-white border-t-4 border-blue-600 shadow-md p-6 rounded-lg w-full mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Set Up Your Authenticator App</h2>
          <p className="text-sm text-gray-600 mb-4">Scan the QR code below with your preferred authenticator app to link your account.</p>

          <div className="flex justify-center mb-6">
            <img src={image} alt="QR Code" className="w-40 h-40" />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 block mb-1">Can't scan? Manual Setup</label>
            <div className="relative">
              <input
                type="text"
                defaultValue="ABCD EFGH IJKL MNOP"
                readOnly
                className="w-full p-2 pr-20 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm"
              />
              <button className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center gap-1 text-blue-600 hover:underline text-sm">
                <img src={copyIcon} alt="Copy" className="w-4 h-4" />
                Copy
              </button>
            </div>
          </div>

          <div className="mb-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">Token Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm text-gray-700">
              <option>Time-based (TOTP)</option>
            </select>
          </div>
        </div>
        </div>
        {/* === Navigation Buttons === */}
        <div className="flex justify-between items-center w-full px-2">
          <Link to="/index/signup/step-1">
            <button className="flex items-center gap-1 text-sm text-gray-700 bg-white px-5 py-2 shadow hover:text-gray-900">
              <img src={backArrow} alt="Back" className="w-4 h-4" />
              Back
            </button>
          </Link>
          <Link to="/index/signup/step-3">
            <button className="flex items-center gap-1 bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Continue
              <img src={forwardArrow} alt="Continue" className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
