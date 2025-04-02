import React, { useRef } from "react";
import Logo from "../../assets/logo";
import email from '../../../public/SVG.svg';
import { Link } from "react-router-dom";

export default function EmailVerification() {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm border-t-4 border-blue-500 animate-fadeIn">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        
        {/* Heading */}
        <h2 className="text-xl font-semibold text-center mb-2">Email Verification</h2>
        <div className="flex justify-center mb-4">
          <img src={email} alt="Email Icon" className="h-12" />
        </div>
        <p className="text-gray-600 text-center text-sm mb-4">
          Enter the verification code sent to your email
        </p>

        {/* Verification Code Input */}
        <div className="flex justify-center gap-2 mb-4">
          {Array(6).fill(0).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-10 border border-gray-300 text-center text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 sm:w-12 sm:h-12"
            />
          ))}
        </div>

        {/* Verify Button */}
        <Link to="/login/success">  
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-transform transform hover:scale-105">
            Verify Email
          </button>
        </Link>

        {/* Expiry Message */}
        <div className="mt-4 text-sm text-center bg-gray-100 p-2 rounded-lg text-gray-600">
          <span className="text-blue-500">ℹ</span> The verification code will expire in 10 minutes for security reasons.
        </div>
      </div>
    </div>
  );
}
