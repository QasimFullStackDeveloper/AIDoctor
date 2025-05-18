import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from "../../Components/Logo";
import authImage from "../../assets/Shield.svg";
import docIcon from "../../assets/document.svg";
import verifyIcon from "../../assets/anotherTick.svg";
import lockIcon from "../../assets/lock.svg";

export default function LogintwoFactor() {
  const location = useLocation();
  const method = location?.state?.method || 'email';

  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (method === 'email' && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [method, timer]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fc] px-4">
      <div className="w-full max-w-[400px] md:max-w-[450px]  rounded-xl  p-6 md:p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-10 w-10">
            <Logo />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
          Two-Factor Authentication
        </h2>
        <p className="text-xs text-center text-gray-500 mb-6">
          Enter the code from your {method === 'email' ? "email" : "authenticator app"}
        </p>

        {/* Method Description */}
        <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50  border-[2px] border-blue-600  mb-3">
          <div className="bg-gray-200 p-[6px] rounded-full shadow mt-1">
            <img
              src={method === 'email' ? docIcon : authImage}
              alt="Method Icon"
              className="w-4 h-4"
            />
          </div>
          <div className="text-xs">
            <p className="font-semibold">
              {method === 'email' ? "Email Verification" : "Authenticator App"}
            </p>
            <p className="text-gray-600">
              {method === 'email'
                ? "Receive a code at your registered email address"
                : "Enter the code from your preferred authenticator app"}
            </p>
          </div>
        </div>

        {/* Code Input */}
        <div className="relative mb-3">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img
              src={lockIcon}
              alt="Input Icon"
              className="w-4 h-4"
            />
          </span>
          <input
            type="text"
            value={code}
            onChange={handleCodeChange}
            maxLength="6"
            placeholder="Enter 6-digit code"
            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Resend Section */}
        {method === 'email' && (
          <div className="flex justify-between items-center text-xs text-gray-500 mb-5">
            <span>
              Resend code in{" "}
              <span className="text-blue-600 font-medium">
                {timer < 10 ? `00:0${timer}` : `00:${timer}`}
              </span>
            </span>
            <button
              className="text-blue-600 hover:underline disabled:opacity-50"
              disabled={timer > 0}
            >
              Resend Code
            </button>
          </div>
        )}

        {/* Verify Button */}
        <button
          className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-transform transform hover:scale-[1.01] mb-3 ${code.length !== 6 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={code.length !== 6}
        >
          <img src={verifyIcon} alt="Verify" className="w-[13px] mr-2" />
          Verify
        </button>

        {/* Back Link */}
        <Link
          to="/login"
          className="block w-full text-center text-sm text-blue-600 hover:underline"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
