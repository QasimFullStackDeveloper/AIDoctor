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
      <div className="w-full max-w-[400px] md:max-w-[450px] rounded-xl p-6 md:p-8">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="h-10 w-10">
            <Logo />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
          Two-Factor Authentication
        </h2>
        <p className="text-[11px] text-center text-gray-500 mb-6">
          Enter the code from your {method === 'email' ? "email" : "authenticator app"}
        </p>

        {/* Method description */}
        <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border-blue-500 mb-4">
          <div className="bg-gray-200 p-2 rounded-full shadow">
            <img
              src={method === 'email' ? docIcon : authImage}
              alt="Method Icon"
              className="w-5 h-5"
            />
          </div>
          <div className="text-sm">
            <p className="font-semibold">
              {method === 'email' ? "Email Verification" : "Authenticator App"}
            </p>
            <p className="text-gray-600 text-xs">
              {method === 'email'
                ? "Check your inbox for the code."
                : "Open your app and enter the 6-digit code."}
            </p>
          </div>
        </div>

        {/* 6-digit code input */}
        <div className="relative mb-3">
          <img
            src={lockIcon}
            alt="Input Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-4"
          />
          <input
            type="text"
            value={code}
            onChange={handleCodeChange}
            maxLength="6"
            placeholder="Enter 6-digit code"
            className="w-full pr-10 pl-10 border border-gray-300 rounded-md py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Resend section for email only */}
        {method === 'email' && (
          <div className="flex justify-between text-xs text-gray-500 mb-4">
            <span>
              Resend code in{" "}
              <span className="text-blue-600 font-medium">
                {timer < 10 ? `00:0${timer}` : `00:${timer}`}
              </span>
            </span>
            <span className="text-blue-600 cursor-pointer hover:underline">
              Resend Code
            </span>
          </div>
        )}

        {/* Verify button */}
        <button
          className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg mb-3 transition-transform transform hover:scale-[1.01] ${code.length !== 6 ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={code.length !== 6}
        >
          <img src={verifyIcon} alt="Verify" className="w-[12px] md:w-[13px] mr-2" />
          Verify
        </button>

        {/* Back to login */}
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
