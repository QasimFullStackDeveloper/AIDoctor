import React, { useState, useEffect } from 'react';
import Logo from "../../Components/Logo";
import { Link } from 'react-router-dom';
import authImage from "../../assets/Shield.svg";
import docIcon from "../../assets/document.svg";
import verifyIcon from "../../assets/anotherTick.svg";
import lockIcon from "../../assets/lock.svg"

export default function LogintwoFactor() {
  const [code, setCode] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(30);


  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fc] px-4">
      <div className="w-full max-w-[400px] md:max-w-[450px]  rounded-xl  p-6 md:p-8">

        {/* Logo */}
        <div className='flex justify-center'  >
          <div className=" h-10 w-10  mb-4">
            <Logo />
          </div>
        </div>
        {/* Title & Subtitle */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
          Two-Factor Authentication
        </h2>
        <p className="text-[11px] text-center text-gray-500 mb-6">
          Choose your preferred method to receive the code
        </p>

        {/* Email Option */}
        <div
          className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer mb-3 transition ${selectedOption === 'email' ? 'bg-blue-50 border-blue-500 hover:bg-blue-100' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'}`}
          onClick={() => handleOptionClick('email')}
        >
          <div className="bg-gray-200 p-2 rounded-full shadow">
            <img
              src={docIcon}
              alt="Email Icon"
              className="w-5 h-5"
            />
          </div>
          <div className="text-sm">
            <p className="font-semibold">Email Verification</p>
            <p className="text-gray-600 text-xs">Receive a code at your registered email address</p>
          </div>
        </div>

        {/* Authenticator Option */}
        <div
          className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer mb-3 transition ${selectedOption === 'auth' ? 'bg-blue-50 border-blue-500 hover:bg-blue-100' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'}`}
          onClick={() => handleOptionClick('auth')}
        >
          <div className="bg-gray-200 p-2 rounded-full shadow">
            <img
              src={authImage}
              alt="Authenticator Icon"
              className="w-5 h-5"
            />
          </div>
          <div className="text-sm">
            <p className="font-semibold">Authenticator App</p>
            <p className="text-gray-600 text-xs">Enter the code from your preferred authenticator app</p>
          </div>
        </div>

        {/* Input for 6-digit Code with Image */}
        <div className="relative mb-3">
          <img
            src={lockIcon}
            alt="Input Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-4"
          />
          <input
            type="text"
            value={code}
            onChange={handleChange}
            maxLength="6"
            placeholder="Enter 6-digit code"
            className="w-full pr-10 pl-10 border border-gray-300 rounded-md py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        {/* Resend Code Timer */}
        <div className="flex justify-between text-xs text-gray-500 mb-4">
          <span>Resend code in <span className="text-blue-600 font-medium">{timer < 10 ? `00:0${timer}` : `00:${timer}`}</span></span>
          <span className="text-blue-600 cursor-pointer hover:underline">Resend Code</span>
        </div>

        {/* Verify Button */}
        <button
          className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg mb-3 transition-transform transform hover:scale-[1.01] ${!selectedOption ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={!selectedOption}
        >
          {selectedOption === 'auth' && (
            <img src={verifyIcon} alt="Verify Illustration" className="w-[12px] md:w-[13px] mr-2" />
          )}
          Verify
        </button>

        {/* Back to Login */}
        <Link
          to="/index/login"
          className="block w-full text-center text-sm text-blue-600 hover:underline"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
