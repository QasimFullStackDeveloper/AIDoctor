import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo";
import { MdMarkEmailRead } from "react-icons/md";

export default function EmailVerification() {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100 px-4">
      <div className="max-w-[330px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] min-h-[550px] w-full bg-white rounded-lg border-t-4 border-blue-600 px-6 py-6 text-center shadow-xl transition duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between">
        
        {/* Top - Logo & Title */}
        <div>
          <div className="flex justify-center mb-5">
            <Logo />
          </div>

          <h2 className="text-xl font-semibold mb-1">Email Verification</h2>

          <div className="flex justify-center mt-3 mb-2 text-blue-600 text-4xl">
            <MdMarkEmailRead />
          </div>

          <p className="text-gray-600 text-sm mb-5 px-2">
            Enter the verification code sent to your email address
          </p>
        </div>

        {/* Middle - Code Inputs */}
        <div className="flex justify-center gap-2 mb-5">
          {Array(6).fill(0).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 text-center text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-200 hover:scale-105"
            />
          ))}
        </div>

        {/* Bottom - Button & Info */}
        <div className="space-y-3">
          <Link to="/index/login/success" className="block">
            <button className="w-full bg-blue-500 text-white mb-[30px] py-2 rounded-lg font-medium hover:bg-blue-600 transition-transform duration-200 hover:scale-105">
              Verify Email
            </button>
          </Link>

          <div className="text-sm text-center bg-gray-100 p-2 rounded-lg text-gray-600">
            <span className="text-blue-500">ℹ</span> Code expires in 10 minutes.
          </div>
        </div>
      </div>
    </div>
  );
}
